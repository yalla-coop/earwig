/* eslint-disable no-undef */
import React, { Component, createRef } from "react";
import { Link } from "react-router-dom";
import ReviewNotAllowedButton from "./ReviewNotAllowedButton";
import GeneralTabs from "../../Common/GeneralTabs";
import Icon from "../../Common/Icon/Icon";

import { PRE_REVIEW } from "../../../constants/naviagationUrls";

import {
  Header,
  ColoredDiv,
  ActionButtonsDiv,
  CompanyNameAndStars,
  CompanyTitle,
  LogoWrapper,
} from "./Profile.style";

import { colors, organizations } from "../../../theme";

import Button from "../../Common/Button";

const ColoredBanner = ({ category, name, isMobile }) => {
  return (
    <ColoredDiv category={category} isMobile={isMobile}>
      <CompanyNameAndStars>
        <LogoWrapper orgColor={organizations[category].primary}>
          {category === "worksite" ? (
            <Icon
              icon="worksite"
              width="26"
              height="26"
              color={organizations[category].primary}
            />
          ) : (
            <p>{category}</p>
          )}
        </LogoWrapper>
        <CompanyTitle white>{name}</CompanyTitle>
        {/* <Rate
          disabled
          value={summary.avgRatings || summary.value || 0}
          style={{
            color: `${colors.stars}`,
            fontSize: "0.75rem",
            minWidth: "78px",
          }}
          className="last-reviewed-star-rate"
        /> */}
      </CompanyNameAndStars>
    </ColoredDiv>
  );
};

// const TabsWrapper = ({ setActiveTab, activeTab }) => {
//   return (
//     <TabsDivFullWidth>
//       <TabsDiv onClick={setActiveTab}>
//         <Tab isActive={activeTab === "overview"} data-tab="overview">
//           <Icon icon="overview" width="19" height="19" />
//           <TabTitle isActive>Overview</TabTitle>
//         </Tab>
//         <Tab isActive={activeTab === "detailed"} data-tab="detailed">
//           <Icon icon="detailed" width="19" height="19" />
//           <TabTitle>Detailed</TabTitle>
//         </Tab>
//         <Underline left={activeTab === "overview"} />
//       </TabsDiv>
//     </TabsDivFullWidth>
//   );
// };

export default class HeaderSection extends Component {
  state = {
    height: 150,
  };

  headerRef = createRef();

  componentDidMount() {
    document.querySelector("#navbar").style.position = "relative";
    const headerHeight = this.headerRef.current.clientHeight;
    this.setState({ height: headerHeight / 5.25 });
  }

  componentWillUnmount() {
    const navbar = document.querySelector("#navbar");

    if (navbar) {
      navbar.style.position = "fixed";
    }
  }

  render() {
    const {
      isTablet,
      isMobile,
      summary = {},
      level,
      reviewsLast30Days,
      orgId,
      setActiveTab,
      activeTab = "overview",
    } = this.props;
    const { category, name } = summary;
    // if there are reviews less dating before 1 month user not allowed
    const reviewNotAllowed = reviewsLast30Days.length > 0;

    return (
      <Header
        isTablet={isTablet}
        isMobile={isMobile}
        headerHeight={this.state.height}
        ref={this.headerRef}
      >
        <ColoredBanner category={category} name={name} isMobile={isMobile} />
        <GeneralTabs
          setActiveTab={setActiveTab}
          activeTab={activeTab}
          tabOne="overview"
          tabTwo="detailed"
          zIndex="2"
          fixedHeight="4.5rem"
          level={level}
          category={category}
          orgId={orgId}
        />
        {level > 0 ? (
          <ActionButtonsDiv>
            <Link
              to={{
                pathname:
                  level <= 1
                    ? // VERIFICATION_REQUIRED
                      `/verification-required/${category}/${name}`
                    : PRE_REVIEW.replace(":orgId", orgId),
                state: { name, category, redirectToReview: true, orgId },
              }}
              onClick={(e) =>
                reviewNotAllowed &&
                reviewsLast30Days.length > 0 &&
                e.preventDefault()
              }
              disabled={reviewNotAllowed && reviewsLast30Days.length > 0}
            >
              <Button
                styleType="primary"
                style={{
                  opacity: `${
                    reviewNotAllowed && reviewsLast30Days.length > 0 ? 0.5 : 1
                  }`,
                }}
                text={`Review this ${category || "organisation"}`}
                disabled={reviewNotAllowed && reviewsLast30Days.length > 0}
                margin="0 auto 0.5rem auto"
                backgroundColor={colors.secondary}
              />
            </Link>
          </ActionButtonsDiv>
        ) : (
          <ReviewNotAllowedButton category={category} sticky header />
        )}
      </Header>
    );
  }
}

//   {reviewNotAllowed && reviewsLast30Days.length > 0 && (
//     <PopOverWrapper shrink={shrink}>
//       <PopoverComponent
//         category={category}
//         popoverOptions={{
//           text: `You recently reviewed this ${category ||
//             "organisation"}. Please leave four weeks between reviews.`,
//           linkText: `Why can't I review this ${category ||
//             "organisation"} today?`,
//           icon: "info",
//           margin: "0.5 auto",
//           color: `${colors.white}`,
//         }}
//       />
//     </PopOverWrapper>
//   )}
// </>
// )}
