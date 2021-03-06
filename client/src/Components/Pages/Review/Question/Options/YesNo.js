import React, { Component } from "react";
import { Map } from "immutable";

import YesNoOption from "./YesNoOption";
import {
  QuestionOptionsWrapper,
  Options,
  CommentIconWrapper,
} from "../Question.style";
import Icon from "../../../../Common/Icon/Icon";
import { colors } from "../../../../../theme";

class YesNo extends Component {
  shouldComponentUpdate(nextProps) {
    if (
      Map(this.props.state.answers).equals(Map(nextProps.state.answers)) &&
      Map(this.props.state.comments).equals(Map(nextProps.state.comments))
    ) {
      return false;
    }
    return true;
  }

  render() {
    const {
      options,
      number,
      category,
      groupId,
      next,
      showNextQestion,
      handleChange,
      question,
      state,
      toggleShowComment,
      hasComment,
    } = this.props;

    return (
      <QuestionOptionsWrapper>
        <Options options={options.length}>
          <div className={`choices choices-${options.length}`}>
            {options.map(option => {
              return (
                <YesNoOption
                  option={option}
                  category={category}
                  question={question}
                  handleChange={handleChange}
                  handleClick={() => {
                    if (typeof next === "object" && next !== null) {
                      let nextQ = next.yes;
                      let other = next.no;
                      if (
                        option === "No" ||
                        option.includes("know") ||
                        option.includes("need") ||
                        option.includes("check")
                      ) {
                        nextQ = next.no;
                        other = next.yes;
                      }
                      showNextQestion(groupId, nextQ, other, number);
                    }
                  }}
                  isChecked={
                    !!(
                      state.answers && state.answers[question.number] === option
                    )
                  }
                />
              );
            })}
          </div>
          {hasComment && (
            <CommentIconWrapper type="button" onClick={toggleShowComment}>
              <Icon
                icon="comment"
                width="27"
                height="27"
                color={colors.dustyGray4}
              />
            </CommentIconWrapper>
          )}
        </Options>
      </QuestionOptionsWrapper>
    );
  }
}

export default YesNo;
