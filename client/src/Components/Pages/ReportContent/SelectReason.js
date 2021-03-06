import React, { Component } from "react";

import {
  SmallParagraph,
  BoldLink,
  SelectWrapper,
  TextArea,
  PageTitle,
  LargeParagraph,
} from "../../Common/StaticPages.style";

import { colors } from "../../../theme";

import Button from "../../Common/Button";

import Icon from "../../Common/Icon/Icon";

import { COMMUNITY_GUIDELINES_URL } from "../../../constants/naviagationUrls";

import Select from "../../Common/Select";

const options = [
  {
    value: "This content violates earwig's guidelines",
    label: "This content violates earwig's guidelines",
  },
  {
    value: "This content contains false information",
    label: "This content contains false information",
  },
  {
    value: "The same person has posted multiple bits of content",
    label: "The same person has posted multiple bits of content",
  },
  {
    value: "This content was posted by management or HR",
    label: "This content was posted by management or HR",
  },
  {
    value: "This content is for the wrong agency/payroll/worksite/company",
    label: "This content is for the wrong agency/payroll/worksite/company",
  },
  {
    value: "I want to comment on this content",
    label: "I want to comment on this content",
  },
  {
    value: "My reason is not listed here",
    label: "My reason is not listed here",
  },
];
export default class SelectReason extends Component {
  render() {
    const {
      handleSelect,
      handleTextAreaChange,
      description,
      handleSubmit,
      loading,
    } = this.props;

    return (
      <div>
        <Icon
          icon="flag"
          width="2.5rem"
          height="2.5rem"
          color={colors.dustyGray4}
        />
        <PageTitle
          style={{
            fontSize: "1.75rem",
            paddingTop: "2rem",
            marginBottom: "2rem",
          }}
        >
          Why do you want to report this piece of content?
        </PageTitle>
        <SmallParagraph left>
          You’ll find guidance in our
          <BoldLink to={COMMUNITY_GUIDELINES_URL} target="_blank">
            {" "}
            Community&nbsp;Guidelines
          </BoldLink>
        </SmallParagraph>
        <SelectWrapper>
          <Select
            options={options}
            handleChange={handleSelect}
            placeholder="Choose a reason"
            value={this.props.reason}
            dropdownClassName="full-text-select"
            id="report-reason"
            scrollToTop
          />
        </SelectWrapper>
        <LargeParagraph
          marginBottom
          style={{ fontSize: "1rem", paddingTop: "0" }}
        >
          Please give us more information, telling us exactly why you think this
          content needs reporting.
        </LargeParagraph>
        <TextArea
          placeholder="More information"
          onChange={handleTextAreaChange}
          value={description}
        />
        <Button
          onClick={handleSubmit}
          loading={loading}
          styleType="primary"
          text="Send report"
        />
      </div>
    );
  }
}
