import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import moment from "moment";

import ReviewSection from "./ReviewSection";
import BarAnswer from "./ProfileAnswers/BarAnswer";

import {
  Wrapper,
  Banner,
  Header,
  CompanyDetails,
  CompanyTitle,
  ButtonDiv,
  OrgButton,
  ReviewDiv,
  GiveReviewTitle,
  ReviewType,
  ReviewButton,
  ReviewButtonsDiv,
  QuickReviewButton,
  Icon,
  Time
} from "./Profile.style";

export default class Profile extends Component {
  state = {
    summary: null,
    reviewDetails: null,
    loaded: false
  };

  fetchData = () => {
    const organizationID = window.location.href.split("/")[4];

    axios
      .post("/api/profile", { organizationID })
      .then(res => {
        const { summary, reviewDetails } = res.data;

        this.setState({ summary: summary[0], reviewDetails, loaded: true });
      })
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.fetchData();
  }

  reviewsByMonth = () => {
    const { reviews } = this.state.summary;

    const reviewMonths = reviews.map(review =>
      moment(review.createdAt).format("MMM")
    );

    let reviewMonthsCount = {
      Jan: 0,
      Feb: 0,
      Mar: 0,
      Apr: 0,
      May: 0,
      Jun: 0,
      Jul: 0,
      Aug: 0,
      Sep: 0,
      Oct: 0,
      Nov: 0,
      Dec: 0
    };

    reviewMonths.map(month => (reviewMonthsCount[month] += 1));

    return reviewMonthsCount;
  };

  render() {
    const { summary, reviewDetails, loaded } = this.state;
    if (!loaded) return <h1>Loading...</h1>;

    const {
      category,
      name,
      avgRatings,
      email,
      phoneNumber,
      totalReviews,
      websiteURL
    } = summary;

    return (
      <Wrapper>
        <Banner category={category}>
          <p>
            <span>{category}:</span> {name}
          </p>
        </Banner>
        <Header>
          <CompanyDetails>
            <CompanyTitle>
              <Icon
                src={`/icons/${category}-icon-desktop.svg`}
                margin="0 1rem 0 0"
              />
              <div>
                <h2>{name}</h2>
                {avgRatings} {totalReviews} reviews
              </div>
            </CompanyTitle>
            <ButtonDiv>
              <a href="tel:0207-555-4444">
                <OrgButton category={category}>Call</OrgButton>
              </a>
              <a href="mailto:www.com">
                <OrgButton category={category}>Email</OrgButton>
              </a>
              <a href="http://www.anything.com" target="_blank">
                <OrgButton category={category}>Website</OrgButton>
              </a>
            </ButtonDiv>
          </CompanyDetails>
          <ReviewDiv>
            <GiveReviewTitle>Give a review about {name}</GiveReviewTitle>
            <ReviewButtonsDiv>
              <ReviewType align="flex-start">
                <Icon src="/icons/clock-2min.svg" margin="0 0.5rem 0 0" />
                <Time>2 mins</Time>
                <ReviewButton category={category}>
                  <h4>Give a full review</h4>
                  <p>(Most helpful!)</p>
                  <Icon src="/icons/arrow-icon.svg" />
                </ReviewButton>
              </ReviewType>
              <Icon src="/icons/or-vertical.svg" margin="0 1rem 0 1rem" />
              <ReviewType align="flex-end">
                <Icon src="/icons/clock-30s.svg" margin="0 0.5rem 0 0" />
                <Time>30 sec</Time>
                <QuickReviewButton category={category}>
                  <h4>Give a quick review</h4>
                  <Icon src="/icons/arrow-icon.svg" />
                </QuickReviewButton>
              </ReviewType>
            </ReviewButtonsDiv>
          </ReviewDiv>
        </Header>
        <ReviewDiv>
          {/* KEY RATINGS SECTION */}
          {reviewDetails.map(
            section =>
              section._id === "Key ratings" && (
                <ReviewSection sectionDetails={section} />
              )
          )}
          {/* OTHER SECTIONS */}
          {reviewDetails.map(
            section =>
              section._id !== "Key ratings" && (
                <ReviewSection sectionDetails={section} />
              )
          )}

          <BarAnswer
            category={category}
            reviewsByMonth={this.reviewsByMonth()}
          />

          {/* OVERALL RATINGS SECTION */}

          <div>Overall Ratings section</div>
        </ReviewDiv>
      </Wrapper>
    );
  }
}
