// approvalEmail
const approvalEmail = require("./templates/approvalEmail");
// createAccountEmail
const createAccount = require("./templates/createAccountEmail");
// emailAdminTheNewProfile
const newEntityAdded = require("./templates/newEntityAdded");
// rejectionEmail
const userRejection = require("./templates/userRejection");
const reportMailing = require("./templates/reportMailing");
const resetPasswordMailing = require("./templates/resetPasswordMailing");
const verificationPhotoEmail = require("./templates/verificationPhotoEmail");
const feedbackEmail = require("./templates/feedbackEmail");
const thinkOfAccountDeletingEmail = require("./templates/thinkOfAccountDeletingEmail");
const newReviewPublished = require("./templates/newReviewPublished");
const newTradeAdded = require("./templates/newTradeAdded");
const gotHelpfulPoints = require("./templates/gotHelpfulPoints");
const gotReplies = require("./templates/gotReplies");
// notify admin about new user signing up
const newUserAdded = require("./templates/newUserAdded");

module.exports = {
  approvalEmail,
  createAccount,
  newEntityAdded,
  userRejection,
  reportMailing,
  resetPasswordMailing,
  verificationPhotoEmail,
  feedbackEmail,
  thinkOfAccountDeletingEmail,
  newReviewPublished,
  newTradeAdded,
  gotHelpfulPoints,
  gotReplies,
  newUserAdded,
};
