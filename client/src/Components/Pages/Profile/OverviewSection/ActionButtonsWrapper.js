import React from "react";

import ReportFlag from "../../../Common/ReportFlag";

import Icon from "../../../Common/Icon/Icon";

import { colors } from "../../../../theme";

import {
  SIGNUP_URL,
  // UPLOAD_VERIFICATION_PHOTO,
} from "../../../../constants/naviagationUrls";

import {
  ActionsDiv,
  ButtonsWrapper,
  LikeWrapper,
  CommentIconWrapper,
} from "../Profile.style";

import PopoverComponent from "../../../Common/Popover";

// renders pop up tooltip content
const getTooltipContent = type => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Icon
        icon={type}
        height="50"
        width="50"
        margin="-0.6rem 0 1rem 0"
        fill={colors.gray}
      />
      {type === "like" &&
        "If you want to give workers points by liking their reviews, you need to sign up."}
      {type === "comment" &&
        "If you want to reply to workers, you need to sign up."}
      {type === "flag" && "If you want to report content, you need to sign up."}
      {/* 
      {type === "exclamation" &&
        "Hang on! You can’t do this until we’ve checked your photo. Give us a few minutes. You might need to refresh your page."} */}
    </div>
  );
};

const ActionButtonsWrapper = ({
  loggedinUserID,
  ownerID,
  onClickHelpful,
  reviewId,
  reviewOrganizationId,
  category,
  level,
  adminReplied,
  goTOReply,
  orgId,
  // liked in general (from backend)
  isLiked,
  // liked now by user, for animation
  isLikedByUser,
  reportLink,
  target,
}) => {
  // decides what like functions to render
  function renderLikeIcon(level) {
    switch (level) {
      // user is verified and can like
      case 1:
      case 2:
      case 3:
      case 4:
        return (
          <LikeWrapper
            as="button"
            onClick={onClickHelpful}
            id={reviewId}
            data-user-id={ownerID}
            data-organization={reviewOrganizationId}
            data-target={target}
            data-category={category}
            active={isLikedByUser}
          >
            <Icon
              icon="like"
              fill={isLiked ? colors.primary : colors.gray}
              width="27"
              height="27"
              margin="0 2rem 0 0"
            />
          </LikeWrapper>
        );

      // COMMENTED_VERIFICATION_CHECK
      // // user awaits verification --> sees hold on popup
      // case 2:
      //   return (
      //     <PopoverComponent
      //       popoverOptions={{
      //         text: getTooltipContent("exclamation"),
      //         iconTooltip: {
      //           icon: "like",
      //           fill: colors.gray,
      //           width: "27",
      //           height: "27",
      //         },
      //         closeButton: true,
      //         margin: "0 2rem 0 0",
      //       }}
      //     />
      //   );
      // user has not undergone verification process --> sees get verified popover
      default:
        return (
          <PopoverComponent
            popoverOptions={{
              text: getTooltipContent("like"),
              iconTooltip: {
                icon: "like",
                fill: colors.gray,
                width: "27",
                height: "27",
              },
              actionButtonTxt: "Sign up now",
              linkButtonOptions: {
                pathname: SIGNUP_URL,
                // COMMENTED_VERIFICATION_CHECK
                // pathname: level >= 1 ? UPLOAD_VERIFICATION_PHOTO : SIGNUP_URL,
                state: {
                  category,
                  orgId,
                  redirectToProfile: true,
                },
              },
              closeButton: true,
              margin: "0 2rem 0 0",
            }}
          />
        );
    }
  }

  // decides what comment function to render
  function renderCommentButton(level) {
    switch (level) {
      // user is verified and can comment
      case 1:
      case 2:
      case 3:
      case 4:
        return (
          <CommentIconWrapper
            onClick={goTOReply}
            data-target={target}
            data-category={category}
            data-org-id={orgId}
            data-review-id={reviewId}
          >
            <Icon icon="comment" fill={colors.gray} width="27" height="27" />
          </CommentIconWrapper>
        );

      // COMMENTED_VERIFICATION_CHECK
      // user awaits verification --> sees hold on popup
      // case 2:
      //   return (
      //     <PopoverComponent
      //       popoverOptions={{
      //         text: getTooltipContent("exclamation"),
      //         iconTooltip: {
      //           icon: "comment",
      //           fill: colors.gray,
      //           width: "27",
      //           height: "27",
      //         },
      //         closeButton: true,
      //         margin: "0",
      //       }}
      //     />
      //   );
      // user has not undergone verification process --> sees get verified popover
      default:
        return (
          <PopoverComponent
            popoverOptions={{
              text: getTooltipContent("comment"),
              iconTooltip: {
                icon: "comment",
                fill: colors.gray,
                width: "27",
                height: "27",
              },
              actionButtonTxt: "Sign up now",
              linkButtonOptions: {
                pathname: SIGNUP_URL,
                // COMMENTED_VERIFICATION_CHECK
                // pathname: level >= 1 ? UPLOAD_VERIFICATION_PHOTO : SIGNUP_URL,
                state: {
                  category,
                  orgId,
                  redirectToProfile: true,
                },
              },
              closeButton: true,
              margin: "0",
            }}
          />
        );
    }
  }

  return (
    <ActionsDiv>
      <ButtonsWrapper>
        {/* LIKE FUNCTIONS */}
        {ownerID !== loggedinUserID && renderLikeIcon(level)}

        {/* COMMENT FUNCTIONS */}
        {adminReplied !== true && renderCommentButton(level)}

        {/* FLAG ICON */}
        {/* report overall/voice review */}
        {loggedinUserID ? (
          // if user is signed up they can report content
          <ReportFlag
            style={{ right: 0, width: "10%" }}
            to={reportLink}
            bottom
          />
        ) : (
          // if not registered they see popover with sign up prompt
          <PopoverComponent
            popoverOptions={{
              text: getTooltipContent("flag"),
              iconTooltip: {
                icon: "flag",
                fill: colors.gray,
                width: "27",
                height: "27",
              },
              actionButtonTxt: "Sign up now",
              linkButtonOptions: {
                pathname: SIGNUP_URL,
                // COMMENTED_VERIFICATION_CHECK
                // pathname: level >= 1 ? UPLOAD_VERIFICATION_PHOTO : SIGNUP_URL,
                state: {
                  category,
                  orgId,
                  redirectToProfile: true,
                },
              },
              closeButton: true,
              margin: "0rem 0 0 3rem",
            }}
          />
        )}
      </ButtonsWrapper>
    </ActionsDiv>
  );
};

export default ActionButtonsWrapper;
