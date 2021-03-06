const API_PREFIX = "/api";

const LOGIN_URL = "/login"; // to use on the server
const API_LOGIN_URL = `${API_PREFIX}${LOGIN_URL}`; // to use on the client

const LOGOUT_URL = "/login";
const API_LOGOUT_URL = `${API_PREFIX}${LOGOUT_URL}`;

const GET_QUESTIONS_URL = "/questions";
const API_GET_QUESTIONS_URL = `${API_PREFIX}${GET_QUESTIONS_URL}`;

const REVIEW_URL = "/review";
const API_POST_REVIEW_URL = `${API_PREFIX}${REVIEW_URL}`;

const UPLOAD_WORKSITE_IMAGE_URL = "/worksite-image";
const API_UPLOAD_WORKSITE_IMAGE_URL = `${API_PREFIX}${UPLOAD_WORKSITE_IMAGE_URL}`;

const REPORT_CONTENT_URL = "/report-content";
const API_REPORT_CONTENT_URL = `${API_PREFIX}${REPORT_CONTENT_URL}`;

const SEARCH_URL = "/search/:category";
const API_SEARCH_URL = `${API_PREFIX}${SEARCH_URL}`;

const ADD_ORGANIZATION_URL = "/add-organization";
const API_ADD_ORGANIZATION_URL = `${API_PREFIX}${ADD_ORGANIZATION_URL}`;

const TRADE_URL = "/trades";
const API_TRADE_URL = `${API_PREFIX}${TRADE_URL}`;

const UPLOAD_VERIFICATION_IMAGE_URL = "/upload-verification-image";
const API_UPLOAD_VERIFICATION_IMAGE_URL = `${API_PREFIX}${UPLOAD_VERIFICATION_IMAGE_URL}`;

const ADD_COMMENT_ON_QUESTION_URL = "/question/comment";
const API_ADD_COMMENT_ON_QUESTION_URL = `${API_PREFIX}${ADD_COMMENT_ON_QUESTION_URL}`;

const GET_OVERALL_REVIEW_REPLIES_URL = "/reviews/overall/replies";
const API_GET_OVERALL_REVIEW_REPLIES_URL = `${API_PREFIX}${GET_OVERALL_REVIEW_REPLIES_URL}`;

const ADD_COMMENT_ON_REVIEW_URL = "/reviews/overall/replies";
const API_ADD_COMMENT_ON_REVIEW_URL = `${API_PREFIX}${ADD_COMMENT_ON_REVIEW_URL}`;

const CONFIRM_EMAIL = "/confirm-email";
const API_CONFIRM_EMAIL = `${API_PREFIX}${CONFIRM_EMAIL}`;

const EDIT_PROFILE = "/edit-profile";
const API_EDIT_PROFILE = `${API_PREFIX}${EDIT_PROFILE}`;

const SIGN_UP = "/signup";
const API_SIGN_UP = `${API_PREFIX}${SIGN_UP}`;

const USERS = "/users";
const API_USERS = `${API_PREFIX}${USERS}`;

const RESET_PASSWORD = "/reset-password";
const API_RESET_PASSWORD = `${API_PREFIX}${RESET_PASSWORD}`;

const SET_PASSWORD = "/set-password";
const API_SET_PASSWORD = `${API_PREFIX}${SET_PASSWORD}`;

const ADD_HELPFUL_OVERALL_POINTS = "/review/:reviewId/:target/helpful-points";

const USERS_TRADE = "/users-trade";
const API_USERS_TRADE = `${API_PREFIX}${USERS_TRADE}`;

const SET_ORGS = "/set-current-orgs";
const API_SET_ORGS = `${API_PREFIX}${SET_ORGS}`;

const GET_USER_ORGS = "/get-current-orgs";
const API_GET_USER_ORGS = `${API_PREFIX}${GET_USER_ORGS}`;

const ADMIN = "/admin";

const UPLOAD_AUDIO = "/upload-audio";
const API_UPLOAD_AUDIO = `${API_PREFIX}${UPLOAD_AUDIO}`;

const GET_AUDIO_URL = "/get-audio";
const API_GET_AUDIO_URL = `${API_PREFIX}${GET_AUDIO_URL}`;

const GET_USER_VOTES_ON_PROFILE = "/users/:userId/profile/:orgId/votes";
const API_GET_USER_VOTES_ON_PROFILE = `${API_PREFIX}${GET_USER_VOTES_ON_PROFILE}`;

const GET_LAST_30D_ORGANISATIONS_IDS = "/reviews/organisations/30days";
const API_GET_LAST_30D_ORGANISATIONS_IDS = `${API_PREFIX}${GET_LAST_30D_ORGANISATIONS_IDS}`;

module.exports = {
  // React variables
  API_LOGIN_URL,
  API_GET_QUESTIONS_URL,
  API_POST_REVIEW_URL,
  API_UPLOAD_WORKSITE_IMAGE_URL,
  API_SEARCH_URL,
  API_LOGOUT_URL,
  API_ADD_ORGANIZATION_URL,
  API_TRADE_URL,
  API_UPLOAD_VERIFICATION_IMAGE_URL,
  API_REPORT_CONTENT_URL,
  API_ADD_COMMENT_ON_QUESTION_URL,
  API_GET_OVERALL_REVIEW_REPLIES_URL,
  API_ADD_COMMENT_ON_REVIEW_URL,
  API_CONFIRM_EMAIL,
  API_EDIT_PROFILE,
  API_SIGN_UP,
  API_USERS,
  API_RESET_PASSWORD,
  API_SET_PASSWORD,
  API_USERS_TRADE,
  API_SET_ORGS,
  API_GET_USER_ORGS,
  API_UPLOAD_AUDIO,
  API_GET_AUDIO_URL,
  API_GET_USER_VOTES_ON_PROFILE,
  API_GET_LAST_30D_ORGANISATIONS_IDS,

  // server variables
  LOGIN_URL,
  LOGOUT_URL,
  GET_QUESTIONS_URL,
  ADD_ORGANIZATION_URL,
  REVIEW_URL,
  UPLOAD_WORKSITE_IMAGE_URL,
  TRADE_URL,
  UPLOAD_VERIFICATION_IMAGE_URL,
  SEARCH_URL,
  REPORT_CONTENT_URL,
  ADD_COMMENT_ON_QUESTION_URL,
  GET_OVERALL_REVIEW_REPLIES_URL,
  ADD_COMMENT_ON_REVIEW_URL,
  ADMIN,
  CONFIRM_EMAIL,
  EDIT_PROFILE,
  SIGN_UP,
  USERS,
  RESET_PASSWORD,
  SET_PASSWORD,
  ADD_HELPFUL_OVERALL_POINTS,
  USERS_TRADE,
  SET_ORGS,
  GET_USER_ORGS,
  UPLOAD_AUDIO,
  GET_AUDIO_URL,
  GET_USER_VOTES_ON_PROFILE,
  GET_LAST_30D_ORGANISATIONS_IDS,
};
