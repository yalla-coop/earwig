import styled from "styled-components";

import { colors, borders } from "../../../../theme";

const titleFontSize = "18px";
const titleFontWeight = "bold";

const generalFontSize = "15px";
const generalFontWeight = "normal";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  padding-bottom: 2.5rem;
`;

export const SectionTitle = styled.h2`
  font-size: ${({ sub }) => (sub ? generalFontSize : titleFontSize)};
  color: ${colors.profileFontColor};
  border-bottom: ${({ bordered }) => (bordered ? borders.commentBox : "none")};
  margin: 0;
  margin-bottom: 1rem;
  font-weight: ${titleFontWeight};
`;

export const QuestionWrapper = styled.div`
  display: ${props => (props.hide ? "none" : "flex")};
  flex-direction: column;
  padding: 1.125rem 0;
`;

export const QuestionTitle = styled.h3`
  font-size: ${generalFontSize};
  color: ${colors.profileFontColor};
  font-weight: ${generalFontWeight};
  margin: 0;
  margin-bottom: 0.5rem;
  text-align: left;
`;

export const HintText = styled.p`
  margin: 0;
  font-style: italic;
  font-size: ${generalFontSize};
  color: ${colors.profileFontColor};
`;

export const StarWrapper = styled(QuestionTitle)`
  font-size: 3rem;
`;

export const CategoryTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: medium;
  margin: 0;
  color: ${colors.profileFontColor};
`;

export const LightTitle = styled.div`
  opacity: 0.5;
  font-weight: 500;
  font-size: 1rem;
  color: ${colors.profileFontColor};
  border: ${({ bar }) => (bar ? `1px solid ${colors.inputBorder}80` : "none")};
  text-align: ${({ bar }) => (bar ? `center` : "left")};
  padding: ${({ large }) => (large ? "0.75rem 0" : "0")};

  p {
    margin-bottom: 0;
  }
`;