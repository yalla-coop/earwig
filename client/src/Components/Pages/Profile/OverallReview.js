import React, { Component } from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import { Collapse, Icon } from "antd";
import axios from "axios";

import { organizations } from "./../../../theme";
import {
  REPORT_CONTENT_URL,
  REPLY_URL
} from "./../../../constants/naviagationUrls";

import { ReactComponent as ReplyIcon } from "../../../assets/reply-icon.svg";

import {
  CommentDiv,
  UserID,
  LightTitle,
  CommentBubble,
  CommentDate,
  BubbleAndDate,
  ReviewDiv,
  StyledAntIcon,
  ActionsDiv,
  ButtonsWrapper,
  ActionsButton,
  VerifyPromo,
  VerifyLink
} from "./Profile.style";

import { authorization } from "./../../../helpers";

import HelpfulBubble from "./../../Common/HelpfulBubble";

import { SectionTitle } from "./ReviewSection.style";

const Panel = Collapse.Panel;

export default class OverallReview extends Component {
  state = {
    commentsOpen: false,
    activeReview: "",
    activeReplies: [],
    repliesLoaded: false,
    counters: {},
    isMouseDown: false
  };

  timer = null;

  pressingDown = e => {
    const { counters } = this.state;
    const { id } = e.target;

    const item = counters[id];
    const counter = item ? item.counter : 0;
    const sentNumber = item ? item.sentNumber : 0;

    const updateCounter = counter >= 10 ? 0 : counter + 1;

    this.setState(
      {
        counters: {
          ...counters,
          [id]: {
            counter: updateCounter,
            sentNumber: sentNumber,
            scaleValue: 1 + counter / 100
          }
        },
        isMouseDown: true
      },
      () => {
        setTimeout(index => {
          const { isMouseDown } = this.state;
          if (isMouseDown) {
            this.hold(id);
          }
        }, 500);
      }
    );
  };

  hold = id => {
    const { counters, isMouseDown } = this.state;
    const item = counters[id];
    const counter = item ? item.counter : 0;

    if ((item && counter >= 10) || !isMouseDown) {
      return this.setState({ isMouseDown: false });
    }

    clearInterval(this.timer);

    this.timer = setInterval(() => {
      const { counters, isMouseDown } = this.state;
      const item = counters[id];
      const counter = item ? item.counter : 0;
      const sentNumber = item ? item.sentNumber : 0;

      if ((item && counter >= 10) || !isMouseDown) {
        clearInterval(this.timer);
        return this.setState({ isMouseDown: false });
      }

      this.setState({
        counters: {
          ...counters,
          [id]: {
            counter: counter + 1,
            sentNumber: sentNumber,
            scaleValue: 1 + counter / 100
          }
        },
        isMouseDown: true
      });
    }, 300);
  };

  notPressingDown = e => {
    const reviewId = e.target.id;
    const { counters } = this.state;

    const item = counters[reviewId];
    const counter = item ? item.counter : 0;
    const sentNumber = item ? item.sentNumber : 0;

    clearInterval(this.timer);
    if (item && counter !== sentNumber) {
      this.setState(
        {
          counters: {
            ...counters,
            [reviewId]: {
              counter: counter,
              sentNumber: counter,
              scaleValue: 1
            }
          },
          isMouseDown: false
        },
        () => {
          this.postHelpfulPoints(counter, reviewId);
        }
      );
    } else {
      this.setState({ isMouseDown: false });
    }
  };

  postHelpfulPoints = (points, reviewId) => {
    axios
      .patch(`/api/review/${reviewId}/overall/helpful-points`, { points })
      .then(({ data }) => {
        console.log(data, "------------------");
      })
      .catch(err => {
        console.log(err, "        :        ", points);
      });
  };

  togglePanel = id => {
    id
      ? this.setState({ activeReview: id }, () => {
          this.props.fetchOverallReplies(id);
        })
      : this.setState({ activeReview: "" });
  };

  render() {
    const {
      summary,
      isTablet,
      isMobile,
      category,
      overallReplies,
      activeOverallId,
      verified,
      level,
      isAdmin
    } = this.props;
    const { activeReview } = this.state;

    const isAuthorized = authorization({
      isAdmin,
      verified,
      minimumLevel: "LEVEL3"
    });

    return summary.reviews[0].createdAt ? (
      <ReviewDiv isTablet={isTablet} isMobile={isMobile}>
        <SectionTitle>Overall ratings</SectionTitle>
        {summary.reviews.map((review, index) => (
          <CommentDiv
            key={review._id + "comment"}
            noReview={review.overallReview.text.length < 1}
          >
            <UserID>{review.user && review.user.userId}</UserID>
            <BubbleAndDate>
              <CommentBubble color={organizations[category].secondary}>
                {review.overallReview.text}
              </CommentBubble>
              <CommentDate>
                {moment().diff(review.createdAt, "weeks")}w
              </CommentDate>
            </BubbleAndDate>
            {/* FLAG ICON */}
            {/*  BUTTONS SECTION */}
            <ActionsDiv>
              <ButtonsWrapper>
                <div style={{ position: "relative" }}>
                  <HelpfulBubble
                    number={
                      this.state.counters[review._id] &&
                      this.state.counters[review._id].counter
                    }
                    color={organizations[category].primary}
                  />
                  <ActionsButton
                    type="primary"
                    bgcolor={
                      isAuthorized
                        ? organizations[category].primary
                        : organizations[category].secondary
                    }
                    id={review._id}
                    onMouseDown={isAuthorized && this.pressingDown}
                    onTouchStart={isAuthorized && this.pressingDown}
                    onMouseUp={isAuthorized && this.notPressingDown}
                    onMouseLeave={isAuthorized && this.notPressingDown}
                    onTouchEnd={isAuthorized && this.notPressingDown}
                    scale={
                      this.state.counters[review._id]
                        ? this.state.counters[review._id].scaleValue
                        : 1
                    }
                  >
                    This is helpful
                  </ActionsButton>
                </div>
                <Link
                  to={{
                    pathname: REPLY_URL,
                    state: {
                      reviewId: review._id,
                      target: "overall",
                      category
                    }
                  }}
                >
                  <ActionsButton
                    type="primary"
                    bgcolor={
                      verified
                        ? organizations[category].primary
                        : organizations[category].secondary
                    }
                    disabled={!verified}
                  >
                    Reply
                  </ActionsButton>
                </Link>
              </ButtonsWrapper>
              <Link
                style={{ right: 0, width: "10%" }}
                to={{
                  pathname: REPORT_CONTENT_URL,
                  state: {
                    review: {
                      overallReview: review.overallReview,
                      user: review.user
                    },
                    organization: summary,
                    target: "overallReview"
                  }
                }}
              >
                <StyledAntIcon type="flag" />
              </Link>
            </ActionsDiv>
            <Collapse
              bordered={false}
              data-id={review._id}
              onChange={this.togglePanel}
              accordion
              activeKey={this.state.activeReview}
            >
              <Panel
                showArrow={false}
                header={
                  <>
                    {activeReview && activeOverallId === review._id ? (
                      <Icon
                        fontWeight={700}
                        type="up"
                        style={{
                          color: organizations[category].primary,
                          width: "15px",
                          marginRight: "0.5rem",
                          fontWeight: 700
                        }}
                      />
                    ) : (
                      <ReplyIcon
                        width="15px"
                        fill={organizations[category].primary}
                        style={{
                          transform: "rotate(180deg)",
                          marginRight: "0.5rem"
                        }}
                      />
                    )}
                    <span
                      style={{
                        fontWeight: 700,
                        color: organizations[category].primary
                      }}
                    >
                      {activeReview && activeOverallId === review._id
                        ? "Hide Replies"
                        : "Read Replies"}
                    </span>
                  </>
                }
                key={review._id}
              >
                {overallReplies.map(reply => (
                  <div key={reply.replies._id}>
                    <UserID>
                      {reply.replies.displayName ||
                        reply.replies.user[0].userId}
                    </UserID>
                    <div style={{ position: "relative", marginBottom: "2rem" }}>
                      <BubbleAndDate>
                        <CommentBubble
                          style={{ maxWidth: "100%" }}
                          color={organizations[category].secondary}
                        >
                          {reply.replies.text}
                        </CommentBubble>
                        <CommentDate>
                          {reply.replies.createdAt &&
                            moment().diff(reply.replies.createdAt, "weeks") +
                              "w"}
                        </CommentDate>
                      </BubbleAndDate>
                      <Link
                        style={{
                          right: 0,
                          width: "10%",
                          position: "absolute",
                          top: "50%",
                          transform: "translateY(-50%)"
                        }}
                        to={{
                          pathname: REPORT_CONTENT_URL,
                          state: {
                            review: {
                              overallReview: review.overallReview,
                              user: review.user
                            },
                            organization: summary,
                            reply: reply.replies,
                            target: "overallReply"
                          }
                        }}
                      >
                        <StyledAntIcon type="flag" />
                      </Link>
                    </div>
                  </div>
                ))}
              </Panel>
            </Collapse>
          </CommentDiv>
        ))}
        {level === 1 && (
          <VerifyPromo>
            <p>
              Get verified as a worker to give reviews, comment on other reviews
              and search jobs
            </p>
            <VerifyLink to={"/upload-verification-photo"} category={category}>
              Get verified now >
            </VerifyLink>
          </VerifyPromo>
        )}
      </ReviewDiv>
    ) : (
      <>
        <ReviewDiv isTablet={isTablet} isMobile={isMobile}>
          <SectionTitle>Overall ratings</SectionTitle>
          <LightTitle>No reviews yet. Be the first…</LightTitle>
          {level === 1 && (
            <VerifyPromo>
              <p>
                Get verified as a worker to give reviews, comment on other
                reviews and search jobs
              </p>
              <VerifyLink to={"/upload-verification-photo"} category={category}>
                Get verified now >
              </VerifyLink>
            </VerifyPromo>
          )}
        </ReviewDiv>
      </>
    );
  }
}
