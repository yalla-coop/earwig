const router = require("express").Router();
const {
  getByOrg, postReview, addNewAgencyPayroll, getOrgsByType, getAgencesAndPayrollsNames,
} = require("../controllers/review");
const upload = require("../middlewares/uploadFileToServer");
const toGoogle = require("./../middlewares/uploadToGoogle");
const uploadVerificationImage = require("./../controllers/uploadVerificationImage");
const getTradesController = require("../controllers/getTrades");
const deleteFileFromServer = require("../middlewares/deleteFileFromServer");
const validation = require("./../middlewares/validation");
const loginController = require("./../controllers/login");
const signupController = require("./../controllers/signup");
const postTradesController = require("../controllers/addTrade");

const uploadWorksiteController = require("../controllers/uploadWorksiteImage");

const {
  LOGIN_URL,
  GET_QUESTIONS_URL,
  REVIEW_URL,
  UPLOAD_WORKSITE_IMAGE_URL,
} = require("../../client/src/apiUrls");

router.get(GET_QUESTIONS_URL, getByOrg);

router.post(REVIEW_URL, postReview);
// Add new payroll and agency
router.get("/organizations", getOrgsByType);
router.post("/organizations", addNewAgencyPayroll);

router.get("/agency-payroll", getAgencesAndPayrollsNames);

router.post(
  LOGIN_URL,
  validation("login"),
  loginController,
);

router.post(
  "/upload-verification-image",
  upload("verificationImage"),
  validation("uploadVerificationImage"),
  toGoogle(),
  deleteFileFromServer,
  uploadVerificationImage,
);

router.post(
  UPLOAD_WORKSITE_IMAGE_URL,
  upload("worksiteImage"),
  toGoogle(),
  deleteFileFromServer,
  uploadWorksiteController,
);

router.get(
  "/trades",
  getTradesController,
);

router.post(
  "/trades",
  validation("addTrade"),
  postTradesController,
);

router.post(
  "/signup",
  validation("signup"),
  signupController,
);

module.exports = router;
