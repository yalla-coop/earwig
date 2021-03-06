import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router } from "react-router-dom";
import CookieConsent from "react-cookie-consent";
import mixpanel from "mixpanel-browser";

import { FBPixelInit } from "./FBPixel";

import "antd/dist/antd.css";
import "./App.css";

import Routes from "./Components";

import ScrollToTop from "./Components/Common/ScrollToTop";

import {
  isXSMobile,
  isSMobile,
  isMobile,
  isTablet,
  isDesktop,
} from "./helpers";

import { API_USERS } from "./apiUrls";

import { COOKIES_POLICY_URL } from "./constants/naviagationUrls";

import { cookieStyles } from "./theme";

export const initialState = {
  isLoggedIn: false,
  isSMobile: false,
  isMobile: false,
  isTablet: false,
  isDesktop: false,
  id: "",
  trade: "",
  verified: false,
  awaitingReview: false,
  verificationPhoto: false,
  userId: "",
  points: 0,
  helpedUsers: 0,
  isAdmin: false,
  isMounted: false,
  email: "",
  city: "",
};

class App extends Component {
  state = {
    ...initialState,
  };

  updateWindowDimensions = this.updateWindowDimensions.bind(this);

  updateWindowDimensions() {
    this.setState({
      isXSMobile: isXSMobile(window.innerWidth),
      isSMobile: isSMobile(window.innerWidth),
      isMobile: isMobile(window.innerWidth),
      isTablet: isTablet(window.innerWidth),
      isDesktop: isDesktop(window.innerWidth),
    });
  }

  getUserInfo = () => {
    axios
      .get(API_USERS)
      .then(res => {
        this.setState({ ...res.data, isLoggedIn: true, isMounted: true });
        this.updateWindowDimensions();
      })
      .catch(err => {
        if (err.response.status === 401) {
          this.setState({ ...initialState, isMounted: true });
          this.updateWindowDimensions();
        } else {
          this.setState({ error: err.response, isMounted: true });
        }
      });
  };

  componentDidMount() {
    this.updateWindowDimensions();
    FBPixelInit();
    window.addEventListener("resize", this.updateWindowDimensions);
    this.getUserInfo();
    window.scrollTo(0, 0);
    mixpanel.track("new mount", {
      earwig: "earwig",
    });
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  handleChangeState = data => {
    this.setState({ ...data, isMounted: true });
  };

  render() {
    const { isLoggedIn, isMobile, isTablet } = this.state;
    return (
      <Router>
        <ScrollToTop>
          <div className="App">
            {/* cookie policy page to be inserted */}
            <CookieConsent
              location="bottom"
              buttonText="Got it!"
              cookieName="myAwesomeCookieName2"
              style={cookieStyles.general}
              buttonStyle={
                isMobile ? cookieStyles.buttonMobile : cookieStyles.button
              }
              expires={150}
              acceptOnScroll
            >
              This website uses cookies to enhance the user experience.{" "}
              <a style={cookieStyles.link} href={COOKIES_POLICY_URL}>
                {" "}
                Find out more about our Cookie Policy
              </a>{" "}
            </CookieConsent>
            <Routes
              handleChangeState={this.handleChangeState}
              isMobile={isMobile}
              isTablet={isTablet}
              isLoggedIn={isLoggedIn}
              {...this.state}
            />
          </div>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
