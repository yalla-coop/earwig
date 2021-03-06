/**
 * sign up controller
 * @param {email} -string- user email
 * @param {password} -string- user plain password
 * response with the user onfo and create new token
 */

const boom = require("boom");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

const {
  findByEmail,
  addNew,
  checkValidReferral,
  updateUserHelpfulPoints,
} = require("./../database/queries/user");
const sendEmail = require("./../helpers/emails");

const addToMailchimpList = require("../helpers/3dParty/mailchimp");
const { isProduction } = require("../helpers/checkEnv");

const { tokenMaxAge } = require("./../constants");
const config = require("../config");
const { referralPoints } = require("./../constants");
const { updateHelpfulPoints } = require("./../database/queries/reviews");

module.exports = async (req, res, next) => {
  const session = await mongoose.startSession();
  session.startTransaction();
  try {
    const { email, password, referral, isWorker, orgType, otherOrg } = req.body;
    const uploadedFileName = req.file && req.file.uploadedFileName;

    const newUserData = {
      email: email.toLowerCase(),
      password,
    };

    const { fieldName } = req;

    if (isWorker === "yes") {
      newUserData.awaitingReview = true;
      newUserData.verificationPhoto = uploadedFileName;
    } else {
      const worksFor = orgType !== "other" ? orgType : otherOrg;
      newUserData.worksFor = worksFor;
      newUserData.awaitingReview = false;
    }
    // check if the referral is valid
    if (referral) {
      const referralUser = await checkValidReferral(referral);
      if (referralUser) {
        newUserData.referral = referral;
      } else {
        return next(boom.badRequest("referral link isn't valid"));
      }
    }

    // check if the email is already exist
    const storedUser = await findByEmail(email);

    if (storedUser) {
      // email already exist
      return next(boom.conflict("Email already taken"));
    }

    // start a mongodb session

    // create new user
    const [user] = await addNew(newUserData, session);

    // if in production add email to list
    if (isProduction()) {
      const resp = await addToMailchimpList(email);
      const { data } = resp;

      if (data.errors.length) {
        throw boom.badData(data.errors[0].error);
      }
      await sendEmail.createAccount(email);

      // notify admin about new user
      await sendEmail.newUserAdded(email);

      // NOT NEEDED CURRENTLY BECAUSE NO VERIFICATION
      // if (fieldName === "verificationImage") {
      //   // send an email to the admin.
      //   await sendEmail.verificationPhotoEmail();
      // }
    }

    // UPDATE THE HELPFULNESS
    if (referral) {
      const referralUser = await checkValidReferral(referral);
      if (referralUser) {
        await updateHelpfulPoints({
          points: referralPoints,
          helpfulUser: referral,
          helpedUser: user._id,
          fromReferral: true,
        });
      }
      await updateUserHelpfulPoints(user.referral);
    }

    // data to be sent in the response
    const userInfo = {
      id: user._id,

      verified: user.verified,
      awaitingReview: user.awaitingReview,
      userId: user.userId,
      points: user.points,
      isAdmin: user.isAdmin,
      email: user.email,
    };

    // create token for 30 day
    const token = jwt.sign({ id: user._id }, config.server.secret, {
      expiresIn: tokenMaxAge.string,
    });

    res.cookie("token", token, { maxAge: tokenMaxAge.number, httpOnly: true });
    req.sqreen.signup_track({ email: user.email });

    await session.commitTransaction();
    session.endSession();
    // send the user info
    return res.json(userInfo);
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    if (error.isBoom && !error.isServer) {
      return next(error);
    }
    return next(boom.badImplementation(error));
  }
};
