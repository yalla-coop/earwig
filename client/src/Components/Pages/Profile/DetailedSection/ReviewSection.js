import React, { Component } from "react";

import {
  Wrapper,
  SectionTitle,
  QuestionWrapper,
  YesNoQuestionWrapper,
  IconContainer,
  QuestionContainer,
  QuestionTitle,
  LightTitle,
  HintText,
  ListWrapper,
} from "./ReviewSection.style";
import Icon from "../../../Common/Icon/Icon";
import ProfileAnswers from "../ProfileAnswers";
import { colors } from "../../../../theme";

const {
  YesNoAnswer,
  ListAnswer,
  PieAnswer,
  ScatterAnswer,
  SiteItemAnswer,
  CanteenItemAnswer,
  BarChartAnswer,
  PayrollAnswer,
  ImageSlider,
} = ProfileAnswers;
export default class ReviewSection extends Component {
  onlyNeutralAnswers = answers => {
    const yesOrNo = answers.filter(
      answer => answer.answer === "Yes" || answer.answer === "No",
    );
    return yesOrNo.length === 0;
  };

  render() {
    const {
      sectionDetails,
      category,
      toggleComments,
      summary,
      isMobile,
      reviewDetails,
      level,
      id,
      userId,
      updateUserPoints,
      updatedUsers,
      counters,
      setCounters,
      activeTab,
    } = this.props;

    const { _id: organizationID, name: organizationName } = summary;

    const { _id: sectionTitle, questions } = sectionDetails;

    let canteenQuestions =
      questions &&
      questions.filter(question =>
        ["canteenItem", "canteenSubItem"].includes(question.profileType),
      );

    if (!canteenQuestions || canteenQuestions.length < 1)
      canteenQuestions = false;

    // if (canteenQuestions && canteenQuestions.length === 1) {
    //   const onlyNeutral = this.onlyNeutralAnswers(canteenQuestions[0].answers);
    //   canteenQuestions = !onlyNeutral;
    // }

    let payrollQuestions =
      questions &&
      questions.filter(question =>
        ["payrollList", "payrollSubList"].includes(question.profileType),
      );

    if (!payrollQuestions || payrollQuestions.length < 1)
      payrollQuestions = false;

    return (
      // Question - Title, AggregatedAnswer, Comment Box
      <Wrapper>
        {sectionTitle !== "Key ratings" && (
          <SectionTitle sub bordered>
            {sectionTitle}
          </SectionTitle>
        )}
        {/* {sectionTitle === "Key ratings" && (
          <QuestionWrapper>
            <QuestionTitle>
              <CategoryTitle>
                {`${category[0].toUpperCase()}${category.slice(1)}`} rating by
                workers
              </CategoryTitle>
            </QuestionTitle>
            <>
              <Rate
                disabled
                tooltips={["Bad", "Poor", "Average", "Great", "Excellent"]}
                value={summary.avgRatings || summary.value}
                style={{
                  color: `${colors.stars}`,
                  fontSize: `${isMobile ? "2rem" : "3rem"}`,
                }}
              />
              <div style={{ dispay: "inline-block" }}>
                {["Bad", "Poor", "Average", "Great", "Excellent"].map(
                  (option, index) => (
                    <span
                      key={index}
                      style={{
                        color: `${
                          index === Math.floor(summary.avgRatings) - 1
                            ? colors.stars
                            : "#e8e8e8"
                        }`,
                        fontWeight: `${
                          index === Math.floor(summary.avgRatings) - 1
                            ? "900"
                            : "500"
                        }`,
                        fontSize: `${isMobile ? "0.6rem" : "0.7rem"}`,
                        width: `${isMobile ? "32px" : "48px"}`,
                        display: "inline-block",
                        textAlign: "center",
                        marginRight: "8px",
                      }}
                    >
                      {option}
                    </span>
                  )
                )}
              </div>
            </>
          </QuestionWrapper>
        )} */}
        {questions &&
          questions.map(
            question =>
              [
                "yesno",
                "pieChart",
                "dotChart",
                "barChart",
                "siteItem",
                "canteenItem",
                "payrollList",
                "list",
              ].includes(question.profileType) && (
                <div key={question._id}>
                  {question.profileType === "yesno" && (
                    <YesNoQuestionWrapper
                      key={question.profileText}
                      // hide={this.onlyNeutralAnswers(question.answers)}
                    >
                      <IconContainer>
                        {question.icon && (
                          <Icon
                            icon={question.icon}
                            width="45"
                            height="50"
                            fill-opacity="0.5"
                            fill="#000"
                          />
                        )}
                      </IconContainer>
                      <QuestionContainer>
                        <QuestionTitle>{question.profileText}</QuestionTitle>

                        {question.hintText && (
                          <HintText>{question.hintText}</HintText>
                        )}
                        <YesNoAnswer
                          category={category}
                          question={question}
                          organizationID={organizationID}
                          userId={id}
                          userUserId={userId}
                          organizationName={organizationName}
                          updateUserPoints={updateUserPoints}
                          updatedUsers={updatedUsers}
                          toggleComments={toggleComments}
                          isMobile={isMobile}
                          zeroAnswers={this.onlyNeutralAnswers(
                            question.answers,
                          )}
                          level={level}
                          counters={counters}
                          setCounters={setCounters}
                          activeTab={activeTab}
                        />
                      </QuestionContainer>
                    </YesNoQuestionWrapper>
                  )}
                  {question.profileType === "pieChart" && (
                    <QuestionWrapper key={`${question._id}pieChart`}>
                      <QuestionTitle>{question.profileText}</QuestionTitle>
                      {question.hintText && (
                        <HintText>{question.hintText}</HintText>
                      )}
                      {question.answers.length > 0 ? (
                        <PieAnswer
                          category={category}
                          question={question}
                          organizationID={organizationID}
                          userId={id}
                          userUserId={userId}
                          organizationName={organizationName}
                          updateUserPoints={updateUserPoints}
                          updatedUsers={updatedUsers}
                          toggleComments={toggleComments}
                          isMobile={isMobile}
                          level={level}
                          counters={counters}
                          setCounters={setCounters}
                          activeTab={activeTab}
                        />
                      ) : (
                        <LightTitle bar>
                          <p>No answers yet</p>
                        </LightTitle>
                      )}
                    </QuestionWrapper>
                  )}
                  {question.profileType === "dotChart" && (
                    <QuestionWrapper key={`${question._id}dotChart`}>
                      <QuestionTitle>{question.profileText}</QuestionTitle>
                      {question.hintText && (
                        <HintText>{question.hintText}</HintText>
                      )}
                      {question.answers.length > 0 ? (
                        <ScatterAnswer
                          category={category}
                          question={question}
                          organizationID={organizationID}
                          userId={id}
                          userUserId={userId}
                          organizationName={organizationName}
                          updateUserPoints={updateUserPoints}
                          updatedUsers={updatedUsers}
                          toggleComments={toggleComments}
                          isMobile={isMobile}
                          level={level}
                          counters={counters}
                          setCounters={setCounters}
                          activeTab={activeTab}
                        />
                      ) : (
                        <LightTitle bar>
                          <p>No answers yet</p>
                        </LightTitle>
                      )}
                    </QuestionWrapper>
                  )}
                  {question.profileType === "barChart" && (
                    <QuestionWrapper key={`${question._id}barChart`}>
                      <QuestionTitle>{question.profileText}</QuestionTitle>
                      {question.hintText && (
                        <HintText>{question.hintText}</HintText>
                      )}
                      {question.answers.length > 0 ? (
                        <BarChartAnswer
                          category={category}
                          question={question}
                          organizationID={organizationID}
                          userId={id}
                          userUserId={userId}
                          organizationName={organizationName}
                          updateUserPoints={updateUserPoints}
                          updatedUsers={updatedUsers}
                          level={level}
                          counters={counters}
                          setCounters={setCounters}
                          activeTab={activeTab}
                        />
                      ) : (
                        <LightTitle bar>
                          <p>No answers yet</p>
                        </LightTitle>
                      )}
                    </QuestionWrapper>
                  )}
                  {question.profileType === "siteItem" && (
                    <QuestionWrapper key={`${question._id}siteItem`}>
                      {/* {question.answers.length > 0 ? ( */}
                      <SiteItemAnswer
                        category={category}
                        question={question}
                        organizationID={organizationID}
                        userId={id}
                        userUserId={userId}
                        organizationName={organizationName}
                        updateUserPoints={updateUserPoints}
                        updatedUsers={updatedUsers}
                        toggleComments={toggleComments}
                        profileType={question.profileType}
                        isMobile={isMobile}
                        reviewDetails={reviewDetails}
                        level={level}
                        counters={counters}
                        setCounters={setCounters}
                        activeTab={activeTab}
                      />
                      {/* ) : (
                        <LightTitle bar>
                          <p>No answers yet</p>
                        </LightTitle>
                      )} */}
                    </QuestionWrapper>
                  )}
                  {question.profileType === "canteenItem" && (
                    <div key={`${question._id}canteenItem`}>
                      {/* CANTEEN SECTION */}
                      {canteenQuestions && (
                        <>
                          {question.answers.length > 0 && (
                            <QuestionWrapper>
                              <CanteenItemAnswer
                                questions={canteenQuestions}
                                toggleComments={toggleComments}
                                isMobile={isMobile}
                                level={level}
                                counters={counters}
                                setCounters={setCounters}
                                activeTab={activeTab}
                              />
                            </QuestionWrapper>
                          )}
                        </>
                      )}
                    </div>
                  )}
                  {question.profileType === "payrollList" && (
                    <div key={`${question._id}payrollList`}>
                      {/* PAYROLL LIST */}
                      {payrollQuestions && (
                        <QuestionWrapper>
                          <QuestionTitle>{question.profileText}</QuestionTitle>
                          {question.hintText && (
                            <HintText>{question.hintText}</HintText>
                          )}
                          {question.answers.length > 0 ? (
                            <PayrollAnswer
                              questions={payrollQuestions}
                              toggleComments={toggleComments}
                              isMobile={isMobile}
                              level={level}
                              counters={counters}
                              setCounters={setCounters}
                              activeTab={activeTab}
                            />
                          ) : (
                            <LightTitle bar>
                              <p>No answers yet</p>
                            </LightTitle>
                          )}
                        </QuestionWrapper>
                      )}
                    </div>
                  )}
                  {question.profileType === "list" && (
                    <ListWrapper>
                      {question.icon && (
                        <IconContainer>
                          <Icon
                            icon={question.icon}
                            width="45"
                            height="50"
                            color={colors.dustyGray4}
                          />
                        </IconContainer>
                      )}
                      <QuestionWrapper key={`${question._id}list`} width="100%">
                        <QuestionTitle>{question.profileText}</QuestionTitle>
                        {question.hintText && (
                          <HintText>{question.hintText}</HintText>
                        )}
                        {question.answers.length > 0 ? (
                          <ListAnswer
                            category={category}
                            question={question}
                            organizationID={organizationID}
                            userId={id}
                            userUserId={userId}
                            organizationName={organizationName}
                            updateUserPoints={updateUserPoints}
                            updatedUsers={updatedUsers}
                            toggleComments={toggleComments}
                            isMobile={isMobile}
                            level={level}
                            counters={counters}
                            setCounters={setCounters}
                            activeTab={activeTab}
                          />
                        ) : (
                          <LightTitle bar>
                            <p>No answers yet</p>
                          </LightTitle>
                        )}
                      </QuestionWrapper>
                    </ListWrapper>
                  )}
                </div>
              ),
          )}

        {/* site images */}
        {questions &&
          questions
            .filter(question => question.type === "image")
            .map(question => {
              return (
                <QuestionWrapper key={question._id}>
                  <QuestionTitle>{question.profileText}</QuestionTitle>
                  {question.answers.length > 0 ? (
                    <ImageSlider
                      category={category}
                      question={question}
                      organizationID={organizationID}
                      userId={id}
                      userUserId={userId}
                      organizationName={organizationName}
                      updateUserPoints={updateUserPoints}
                      updatedUsers={updatedUsers}
                      organization={summary}
                      level={level}
                      counters={counters}
                      setCounters={setCounters}
                      activeTab={activeTab}
                    />
                  ) : (
                    <LightTitle image bar>
                      <p>No images yet</p>
                    </LightTitle>
                  )}
                </QuestionWrapper>
              );
            })}
      </Wrapper>
    );
  }
}
