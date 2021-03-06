export const HOME_PAGE = "/";
export const SEARCH_URL = "/search/:category?";
export const PURE_SEARCH_URL = "/search";
export const ADD_PROFILE_URL = "/add-profile/:name";
export const ADD_PROFILE_START_REVIEW_URL =
  "/add-profile-start-review/:category(agency|payroll|company|worksite)/:name";
export const VERIFICATION_REQUIRED =
  "/verification-required/:category(agency|payroll|company|worksite)/:name";
export const ADD_PROFILE_AFTER_SIGN_UP =
  "/add-profile-sign-up/:category(agency|payroll|company|worksite)/:name";
export const ADD_REVIEW_TO_NEW_PROFILE =
  "/organization/review/new/:category(agency|payroll|company|worksite)/:name";

export const USER_PROFILE_URL = "/my-profile";
export const PROFILE_URL = "/my-profile";
export const ORGS_PROFILE_URL = "/profile/:profileID";
export const GENERAL_ORGS_PROFILE_URL = "/profile";
export const RESOURCES_URL = "/resources";
export const CONTACT_URL = "/contact";
export const FAQ_URL = "/faq";
export const LOGOUT_URL = "/logout";
export const LOGIN_URL = "/login";
export const SIGNUP_URL = "/signup";
export const THANKYOU_URL = "/thank-you";
export const EDIT_PROFILE_URL = "/edit-profile";
export const EDIT_TRADE_URL = `${EDIT_PROFILE_URL}/trade`;
export const EDIT_PASSWORD_URL = `${EDIT_PROFILE_URL}/password`;
export const EDIT_CITY_URL = `${EDIT_PROFILE_URL}/city`;
export const EDIT_ID_URL = `${EDIT_PROFILE_URL}/earwig-id`;
export const DELETE_PROFILE_URL = "/delete-profile";
export const UPLOAD_VERIFICATION_URL = "/upload-verification-photo";
export const PRIVACY_URL = "/privacy-policy";
export const ADMIN = "/admin";
export const REVIEW_URL = "/review";
export const CONFIRM_EMAIL_URL = "/confirm-email/:id";
export const REPORT_CONTENT_URL = "/report";
export const COMMUNITY_GUIDELINES_URL = "/community-guidelines";
export const INTRO_URL = "/intro";
export const RESET_PASSWORD_URL = "/reset-password";
export const SET_PASSWORD_URL = "/reset-password/set/:token";
export const PASSWORD_SENT_URL = "/reset-password/sent";
export const PASSWORD_DONE_URL = "/reset-password/done";
export const REPLY_URL = "/reply";
export const TERMS_OF_USE_URL = "/terms-of-use";
export const COOKIES_POLICY_URL = "/cookies-policy";
export const PRIVACY_AND_TERMS_URL = "/privacy-and-terms";
export const MY_REVIEWS_URL = "/my-reviews";
export const MY_POINTS_URL = "/my-points";
export const ASK_QUESTION_URL = "/ask-question";
export const JOBS_URL = "/jobs";
export const INVITE_WORKERS_URL = "/invite-workers";
export const ORG_STATUS_URL_SIGNUP = "/getting-to-know-you";
export const ORG_STATUS_URL_LOGIN = "/update";
export const UPLOAD_VERIFICATION_PHOTO = "/upload-verification-photo";
export const PRE_REVIEW = "/pre-review/:orgId";
