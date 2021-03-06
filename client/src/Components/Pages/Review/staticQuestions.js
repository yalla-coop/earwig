import React from "react";
import PopoverComponent from "../../Common/Popover";
import { Text } from "../../Common/ToolTip";
import Icon from "../../Common/Icon/Icon";
import { colors } from "../../../theme";

const decideText = category => {
  switch (category) {
    case "company":
      return `When did you last work for this ${category}?`;
    case "worksite":
      return `When did you last work on this ${category}?`;
    default:
      return `When did you last use this ${category}?`;
  }
};

export const STATIC_QUESTIONS = (category, history, state) => [
  {
    number: 21,
    text: decideText(category),
    type: "dateRange",
    category,
  },
  {
    number: 22,
    text: `Please write a review of this ${category ||
      "organisation"} or share a voice review below`,
    type: "overallReview",
    category,
    label: `What went well and what do you think this ${category} needs to do to improve?`,
    hintText: (
      <PopoverComponent
        popoverOptions={{
          text: (
            <>
              <p>
                Workers give you points if they find your reviews helpful.
                Here’s how to do that:
              </p>
              <p>
                <span style={{ fontWeight: "bold" }}>Be detailed.</span> Talk
                about things you would care about if you were looking for a new
                job. More detail = more helpful.
              </p>
              <p>
                <span style={{ fontWeight: "bold" }}>Be balanced. </span>
                Even if you liked a job, there was probably some room for
                improvement somewhere and this is useful for others to know.
                Others will find your reviews more realistic if they’re not
                completely positive (or completely negative).
              </p>
              <p>
                <span style={{ fontWeight: "bold" }}>Be authentic. </span>
                Speak your true self and opinions. If your reviews talk about
                specific situations that are interesting and relevant, then
                you’re bound to help more people.
              </p>
            </>
          ),
        }}
        history={history && history}
        currentState={state && state}
      >
        <div style={{ display: "flex" }}>
          <div style={{ position: "relative", top: "1.5px" }}>
            <Icon
              icon="info"
              width="23"
              height="23"
              margin="0 0.5rem 0 0"
              color={colors.primary}
            />
          </div>
          <Text>Learn more</Text>
        </div>
      </PopoverComponent>
    ),
  },
  {
    number: 23,
    text: `How would you rate this ${category}`,
    type: "rate",
    options: ["Bad", "Poor", "Average", "Good", "Excellent"],
    category,
  },
  {
    number: 24,
    text: `Share a voice review of this ${category || "organisation"}`,
    hintText: "People may be able to identify you by your voice",
    type: "voiceReview",
  },
];
