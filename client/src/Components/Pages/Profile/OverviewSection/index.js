import React from "react";

import { Skeleton } from "antd";

import OverallReview from "./OverallReview";
import OrganisationDetails from "./OrganisationDetails";
import Level0Promo from "./Level0Promo";

const OverviewSection = ({
  isMobile,
  isTablet,
  summary,
  contractorAnswers,
  //
  activeOverallId,
  overallReplies,
  fetchOverallReplies,
  verified,
  level,
  isAdmin,
  organizationID,
  id,
  awaitingReview,
  FilteredReviewMonths,
  history,
  loaded,
  updateUserPoints,
  updatedUsers,
  counters,
  setCounters,
  activeTab,
}) => {
  const { category, name, phoneNumber, email, websiteUrl } = summary && summary;

  return (
    <>
      {/* ORGANISATION INFORMATION AND CONTACT DETAILS */}
      {level >= 3 && (
        <OrganisationDetails
          isMobile={isMobile}
          isTablet={isTablet}
          name={name}
          email={email}
          phoneNumber={phoneNumber}
          websiteUrl={websiteUrl}
          category={category}
          contractorAnswers={contractorAnswers}
          rate={summary.avgRatings || summary.value || 0}
        />
      )}

      {/* Reviews Section */}

      <Skeleton loading={!loaded}>
        <OverallReview
          summary={summary}
          isTablet={isTablet}
          isMobile={isMobile}
          category={category}
          activeOverallId={activeOverallId}
          overallReplies={overallReplies}
          fetchOverallReplies={fetchOverallReplies}
          verified={verified}
          isAdmin={isAdmin}
          orgId={organizationID}
          id={id}
          awaitingReview={awaitingReview}
          FilteredReviewMonths={FilteredReviewMonths}
          history={history}
          loaded={loaded}
          updateUserPoints={updateUserPoints}
          updatedUsers={updatedUsers}
          counters={counters}
          setCounters={setCounters}
          level={level}
          activeTab={activeTab}
        />
      </Skeleton>

      {/* BASIC VIEW FOR LOGGED OUT USERS */}
      <Skeleton loading={!loaded}>
        {level < 1 && (
          <Level0Promo
            isMobile={isMobile}
            isTablet={isTablet}
            category={category}
            summary={summary}
            loaded={loaded}
          />
        )}

        {/* HIDDEN DIV TO SCROLL SECTION INTO VIEW */}
        {/* <div ref={this.myDivToFocus} /> */}

        {/* {level < 1 && (
          <ReviewDiv isTablet={isTablet} isMobile={isMobile}>
            <ReviewNotAllowedButton category={category} location={location} />
          </ReviewDiv>
        )} */}
      </Skeleton>
    </>
  );
};

export default OverviewSection;
