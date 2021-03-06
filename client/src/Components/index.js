import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import {
  SIGNUP_URL,
  LOGIN_URL,
  THANKYOU_URL,
  EDIT_PROFILE_URL,
  UPLOAD_VERIFICATION_URL,
  ORGS_PROFILE_URL,
  REPORT_CONTENT_URL,
  DELETE_PROFILE_URL,
  COMMUNITY_GUIDELINES_URL,
  TERMS_OF_USE_URL,
  COOKIES_POLICY_URL,
  RESET_PASSWORD_URL,
  EDIT_CITY_URL,
  EDIT_PASSWORD_URL,
  EDIT_ID_URL,
  EDIT_TRADE_URL,
  HOME_PAGE,
  RESOURCES_URL,
  CONTACT_URL,
  FAQ_URL,
  PRIVACY_AND_TERMS_URL,
  SEARCH_URL,
  ADD_PROFILE_URL,
  ADD_PROFILE_START_REVIEW_URL,
  ADD_REVIEW_TO_NEW_PROFILE,
  VERIFICATION_REQUIRED,
  ADMIN,
  CONFIRM_EMAIL_URL,
  INTRO_URL,
  USER_PROFILE_URL,
  REPLY_URL,
  PRIVACY_URL,
  ORG_STATUS_URL_SIGNUP,
  ORG_STATUS_URL_LOGIN,
  INVITE_WORKERS_URL,
  PRE_REVIEW,
  ADD_PROFILE_AFTER_SIGN_UP,
  MY_REVIEWS_URL,
  MY_POINTS_URL,
} from "../constants/naviagationUrls";

// import Landing from "./Pages/Landing";
import ReportContent from "./Pages/ReportContent";
import UploadImage from "./Pages/UploadImage";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Thankyou from "./Pages/ThankYou";
import EditProfile from "./Pages/EditProfile";
import DeleteProfile from "./Pages/DeleteProfile";
import UserProfile from "./Pages/UserProfile";
import UserReviews from "./Pages/UserProfile/UserReviews";
import UserPoints from "./Pages/UserProfile/UserPoints";
import Review from "./Pages/Review";
import Profile from "./Pages/Profile";
import Admin from "./Pages/Admin";
import Search from "./Pages/Search";
import JoinMailList from "./Pages/JoinMailList";
import AddProfileSelection from "./Pages/AddProfileSelection";
import AddProfileStartReview from "./Pages/AddProfileReviewStart";
import Intro from "./Pages/Intro";
import PrivateRoute from "./Common/PrivateRoute";
import Reply from "./Pages/Reply";
import ResetPassword from "./Pages/ResetPassword";
import EditProfileSection from "./Pages/EditProfile/EditProfileSection";
import OrgCheck from "./Pages/OrgCheck";
import Welcome from "./Pages/Welcome";
import InviteWorkers from "./Pages/InviteWorkers";
import PreReview from "./Pages/PreReview";
import AddProfileAfterSignUp from "./Pages/AddProfileAfterSignUp";
import VerificationRequired from "./Pages/VerificationRequired";

import {
  FAQ,
  HelpfulStuff,
  ShapeEarwig,
  PrivacyAndTerms,
  CommunityGuidlines,
  TermsOfUse,
  CookiesPolicy,
  PrivacyPolicy,
} from "./Pages/Static";

export default function index(props) {
  const { handleChangeState, isMobile, isTablet, isLoggedIn, isAdmin } = props;

  return (
    <>
      <Switch>
        <PrivateRoute
          exact
          minimumLevel="LEVEL1"
          path="/organization/:orgId/review"
          {...props}
          Component={Review}
        />
        <PrivateRoute
          exact
          minimumLevel="LEVEL2"
          path={ADD_REVIEW_TO_NEW_PROFILE}
          Component={Review}
          createNewProfile
          {...props}
        />
        <PrivateRoute
          exact
          minimumLevel="LEVEL1"
          path="/review/:reviewId/edit"
          {...props}
          Component={Review}
        />
        <PrivateRoute
          exact
          minimumLevel="LEVEL2"
          path={THANKYOU_URL}
          {...props}
          Component={Thankyou}
          navbar
        />
        <PrivateRoute
          exact
          minimumLevel="LEVEL3"
          path={INVITE_WORKERS_URL}
          {...props}
          Component={InviteWorkers}
          navbar
        />
        <PrivateRoute
          exact
          minimumLevel="LEVEL1"
          path={UPLOAD_VERIFICATION_URL}
          {...props}
          Component={UploadImage}
        />
        <PrivateRoute
          exact
          minimumLevel="LEVEL0"
          path={ORGS_PROFILE_URL}
          isTablet={isTablet}
          isMobile={isMobile}
          {...props}
          Component={Profile}
          navbar
        />
        <PrivateRoute
          minimumLevel="ADMIN"
          path={ADMIN}
          {...props}
          Component={Admin}
        />
        {/* target could be 'profile' or `review` */}
        <PrivateRoute
          exact
          minimumLevel="LEVEL0"
          path={`${SEARCH_URL}/:target?`}
          {...props}
          isMobile={isMobile}
          isTablet={isTablet}
          Component={Search}
          navbar
          title="Search"
        />
        <PrivateRoute
          minimumLevel="LEVEL0"
          path={ADD_PROFILE_URL}
          {...props}
          isMobile={isMobile}
          isTablet={isTablet}
          Component={AddProfileSelection}
        />
        <PrivateRoute
          minimumLevel="LEVEL0"
          path={ADD_PROFILE_AFTER_SIGN_UP}
          {...props}
          isMobile={isMobile}
          isTablet={isTablet}
          Component={AddProfileAfterSignUp}
        />

        <PrivateRoute
          minimumLevel="LEVEL0"
          path={VERIFICATION_REQUIRED}
          {...props}
          isMobile={isMobile}
          isTablet={isTablet}
          Component={VerificationRequired}
        />
        <PrivateRoute
          minimumLevel="LEVEL0"
          path={ADD_PROFILE_START_REVIEW_URL}
          {...props}
          isMobile={isMobile}
          isTablet={isTablet}
          Component={AddProfileStartReview}
        />
        <PrivateRoute
          minimumLevel="LEVEL1"
          path={EDIT_PROFILE_URL}
          exact
          {...props}
          isMobile={isMobile}
          isTablet={isTablet}
          Component={EditProfile}
        />
        {/* SUB EDIT PROFILE SECTIONS */}
        <PrivateRoute
          minimumLevel="LEVEL1"
          path={EDIT_ID_URL}
          exact
          {...props}
          isMobile={isMobile}
          isTablet={isTablet}
          Component={EditProfileSection}
          section="earwigId"
        />
        <PrivateRoute
          minimumLevel="LEVEL1"
          path={EDIT_PASSWORD_URL}
          exact
          {...props}
          isMobile={isMobile}
          isTablet={isTablet}
          Component={EditProfileSection}
          section="password"
        />
        <PrivateRoute
          minimumLevel="LEVEL1"
          path={EDIT_TRADE_URL}
          exact
          {...props}
          isMobile={isMobile}
          isTablet={isTablet}
          Component={EditProfileSection}
          section="trade"
        />
        <PrivateRoute
          minimumLevel="LEVEL1"
          path={EDIT_CITY_URL}
          exact
          {...props}
          isMobile={isMobile}
          isTablet={isTablet}
          Component={EditProfileSection}
          section="city"
        />
        <PrivateRoute
          minimumLevel="LEVEL1"
          path={DELETE_PROFILE_URL}
          {...props}
          isMobile={isMobile}
          isTablet={isTablet}
          Component={DeleteProfile}
        />
        {/* END OF SUB EDIT PROFILE SECTIONS */}
        <PrivateRoute
          minimumLevel="LEVEL1"
          path={USER_PROFILE_URL}
          {...props}
          isMobile={isMobile}
          isTablet={isTablet}
          Component={UserProfile}
          navbar
          title="Your profile"
        />
        <PrivateRoute
          minimumLevel="LEVEL3"
          path={MY_REVIEWS_URL}
          {...props}
          isMobile={isMobile}
          isTablet={isTablet}
          Component={UserReviews}
          navbar
          title="Reviews you've given"
        />
        <PrivateRoute
          minimumLevel="LEVEL3"
          path={MY_POINTS_URL}
          {...props}
          isMobile={isMobile}
          isTablet={isTablet}
          Component={UserPoints}
          navbar
          title="Points you've earned"
        />
        <PrivateRoute
          minimumLevel="LEVEL0"
          path={CONFIRM_EMAIL_URL}
          {...props}
          isMobile={isMobile}
          isTablet={isTablet}
          Component={JoinMailList}
        />
        <PrivateRoute
          minimumLevel="LEVEL0"
          path={FAQ_URL}
          {...props}
          isMobile={isMobile}
          isTablet={isTablet}
          Component={FAQ}
          navbar
          title="FAQ & how to use earwig"
        />
        <PrivateRoute
          minimumLevel="LEVEL0"
          path={RESOURCES_URL}
          {...props}
          isMobile={isMobile}
          isTablet={isTablet}
          Component={HelpfulStuff}
          navbar
          title="Helpful stuff"
        />
        <PrivateRoute
          minimumLevel="LEVEL3"
          path={CONTACT_URL}
          {...props}
          isMobile={isMobile}
          isTablet={isTablet}
          Component={ShapeEarwig}
          navbar
          title="Shape earwig"
        />
        <PrivateRoute
          minimumLevel="LEVEL0"
          path={PRIVACY_AND_TERMS_URL}
          {...props}
          isMobile={isMobile}
          isTablet={isTablet}
          Component={PrivacyAndTerms}
          navbar
          title="Privacy & terms"
        />
        <PrivateRoute
          minimumLevel="LEVEL0"
          path={PRIVACY_URL}
          {...props}
          isMobile={isMobile}
          isTablet={isTablet}
          Component={PrivacyPolicy}
          navbar
          title="Privacy Policy"
        />
        <PrivateRoute
          minimumLevel="LEVEL0"
          path={COMMUNITY_GUIDELINES_URL}
          {...props}
          isMobile={isMobile}
          isTablet={isTablet}
          Component={CommunityGuidlines}
          navbar
          title="Community Guidlines"
        />
        <PrivateRoute
          minimumLevel="LEVEL0"
          path={TERMS_OF_USE_URL}
          {...props}
          isMobile={isMobile}
          isTablet={isTablet}
          Component={TermsOfUse}
          navbar
          title="Terms Of Use"
        />
        <PrivateRoute
          minimumLevel="LEVEL0"
          path={COOKIES_POLICY_URL}
          {...props}
          isMobile={isMobile}
          isTablet={isTablet}
          Component={CookiesPolicy}
          navbar
          title="Privacy Policy"
        />
        <PrivateRoute
          minimumLevel="LEVEL1"
          path={REPORT_CONTENT_URL}
          {...props}
          isMobile={isMobile}
          isTablet={isTablet}
          Component={ReportContent}
        />
        <PrivateRoute
          minimumLevel="LEVEL1"
          path={REPLY_URL}
          {...props}
          isMobile={isMobile}
          isTablet={isTablet}
          Component={Reply}
        />
        <PrivateRoute
          minimumLevel="LEVEL2"
          path={INTRO_URL}
          {...props}
          isMobile={isMobile}
          isTablet={isTablet}
          Component={Intro}
        />
        <PrivateRoute
          minimumLevel="LEVEL1"
          path={ORG_STATUS_URL_SIGNUP}
          {...props}
          isMobile={isMobile}
          isTablet={isTablet}
          type="sign-up"
          Component={OrgCheck}
        />
        <PrivateRoute
          minimumLevel="LEVEL1"
          path={ORG_STATUS_URL_LOGIN}
          {...props}
          isMobile={isMobile}
          isTablet={isTablet}
          type="sign-up"
          Component={OrgCheck}
          loggingIn
        />
        <PrivateRoute
          minimumLevel="LEVEL0"
          path={HOME_PAGE}
          {...props}
          isMobile={isMobile}
          isTablet={isTablet}
          Component={Welcome}
          navbar
          exact
          handleChangeState={handleChangeState}
        />

        <PrivateRoute
          minimumLevel="LEVEL0"
          path={HOME_PAGE}
          {...props}
          isMobile={isMobile}
          isTablet={isTablet}
          Component={Welcome}
          navbar
          exact
        />

        <PrivateRoute
          minimumLevel="LEVEL0"
          path={PRE_REVIEW}
          {...props}
          isMobile={isMobile}
          isTablet={isTablet}
          Component={PreReview}
        />

        <Route
          exact
          path={`${SIGNUP_URL}/:referral?`}
          render={linkProps =>
            !isLoggedIn ? (
              <Signup
                {...props}
                {...linkProps}
                handleChangeState={handleChangeState}
              />
            ) : (
              <Redirect to={isAdmin ? ADMIN : HOME_PAGE} />
            )
          }
        />
        <Route
          exact
          path={LOGIN_URL}
          render={linkProps =>
            !isLoggedIn ? (
              <Login
                {...props}
                {...linkProps}
                handleChangeState={handleChangeState}
              />
            ) : (
              <Redirect to={isAdmin ? ADMIN : HOME_PAGE} />
            )
          }
        />
        <Route
          path={RESET_PASSWORD_URL}
          render={linkProps =>
            !isLoggedIn ? (
              <ResetPassword
                {...props}
                {...linkProps}
                handleChangeState={handleChangeState}
              />
            ) : (
              <Redirect to={isAdmin ? ADMIN : HOME_PAGE} />
            )
          }
        />
        {/* 404 Error Page -need to be created */}
        <Route render={() => <h1>Page Not Found</h1>} />
      </Switch>
    </>
  );
}
