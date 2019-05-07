const boom = require("boom");

const {
  getQuetionsByOrg,
  getOrganization,
  getQuestionsByOrgCategory,
  postOrg,
  getOrgsNamesByType,
  getAgenciesAndPayrollsNames,
} = require("../database/queries/review");
const { findByEmail } = require("../database/queries/user");

const Review = require("../database/models/Review");
const Answer = require("../database/models/Answer");
const Comment = require("../database/models/Comment");

// get a list of quesions grouped by questions controller
const getByOrg = (req, res, next) => {
  const { organization } = req.query;

  getQuetionsByOrg(organization)
    .then((groups) => {
      res.json(groups);
    })
    .catch(() => {
      next(boom.badImplementation());
    });
};

// post a short review controller
const postReviewShort = async (req, res, next) => {
  const {
    review: {
      rate, overallReview, workPeriod, voiceReview,
    },
  } = req.body.values;
  const { user, organization } = req.body;

  try {
    // fetch the reviewed org. data.
    const organizationData = await getOrganization(organization.category, organization.name);
    // fetch the user data
    const userData = await findByEmail(user.email);
    // create new quick review
    const newReview = new Review({
      rate,
      organization: organizationData,
      user: userData,
      overallReview: {
        text: overallReview,
      },
      workPeriod,
      voiceReview: voiceReview || "voice/file", // temp until next sprint
    });
    await newReview.save();
    res.send(organizationData._id);
  } catch (error) {
    next(boom.badImplementation);
  }
};

// controller for full review
const postReview = async (req, res, next) => {
  const {
    questions: questionsAnswers,
    review: {
      rate, overallReview, workPeriod, voiceReview,
    },
    comments,
  } = req.body.values;
  const { user, organization } = req.body;

  try {
    const organizationData = await getOrganization(organization.category, organization.name);
    const userData = await findByEmail(user.email);
    const questions = await getQuestionsByOrgCategory(organization.category);

    // map each number from the review to its question object.
    const questionsObject = {};
    questions.forEach((q) => {
      if (!questionsObject[q.number]) {
        questionsObject[q.number] = q;
      }
    });

    // create new review
    const newReview = new Review({
      rate,
      organization: organizationData,
      user: userData,
      overallReview: {
        text: overallReview,
      },
      workPeriod,
      voiceReview: voiceReview || "voice/file", // temp until we make the voice record
    });

    const currentReview = await newReview.save();

    // extract the comments from the req and
    // insert each comment to the db
    const commentsData = Object.keys(comments)
      .sort((a, b) => a - b)
      .map((c) => {
        if (comments[c]) {
          const comment = {
            user: userData,
            organization: organizationData,
            question: questionsObject[c],
            text: comments[c],
          };
          return comment;
        }
        return null;
      })
      .filter(value => value);

    const insertedComments = await Comment.insertMany(commentsData);
    // list of the questions with comments
    const commentedQuestions = insertedComments.map(comment => ({
      id: comment.question.number,
      comment,
    }));

    const reviewAnswers = Object.keys(questionsAnswers)
      .sort((a, b) => a - b)
      .map((qAnswer) => {
        if (questionsAnswers[qAnswer]) {
          const answer = {
            user: userData,
            review: currentReview,
            question: questionsObject[qAnswer],
            answer: questionsAnswers[qAnswer],
            organization: organizationData,
          };

          // if the question has a comment add a reference to that comment
          // in the related answer.
          commentedQuestions.map((item) => {
            // eslint-disable-next-line eqeqeq
            if (item.id == qAnswer) {
              answer.comment = item.comment;
            }
          });

          return answer;
        }
        return null;
      });

    const allAnswers = [...reviewAnswers].filter(answer => answer !== null);
    await Answer.insertMany(allAnswers);

    res.send(organizationData._id);
  } catch (error) {
    next(boom.badImplementation);
  }
};

/* not used now */
const addNewAgencyPayroll = async (req, res, next) => {
  const { name, category } = req.body;
  await postOrg(category, name);
  res.send();
};

const getOrgsByType = async (req, res, next) => {
  const { category } = req.body;
  try {
    const organization = await getOrgsNamesByType(category);
    const names = organization[0].category;
    res.send({ names });
  } catch (err) {
    next(boom.badImplementation());
  }
};

const getAgencesAndPayrollsNames = async (req, res, next) => {
  try {
    const agencyAndPayrolls = await getAgenciesAndPayrollsNames();
    res.send(agencyAndPayrolls);
  } catch (err) {
    next(boom.badImplementation());
  }
};

module.exports = {
  getByOrg,
  postReview,
  addNewAgencyPayroll,
  getOrgsByType,
  getAgencesAndPayrollsNames,
  postReviewShort,
};
