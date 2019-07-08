import styled from "styled-components";

import { colors, organizations, borders } from "../../../../theme";

export const QuestionWrapper = styled.div.attrs({ className: "" })`
  font-size: 18px;
  margin-bottom: 1rem;
  color: ${colors.profileFontColor};
`;

export const QText = styled.p`
  margin: 0;
  font-weight: 900;
  font-size: 18px;
`;

export const HintText = styled.p`
  margin: 0;
  font-style: italic;
  font-size: 16px;
  color: ${colors.profileFontColor};
`;

export const QuestionOptionsWrapper = styled.div`
  font-size: 16px;
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
`;

export const AnswerDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const Options = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  font-size: 16px;
  margin-bottom: 1rem;
  justify-content: ${({ options }) =>
    options === 4 ? "flex-end" : "space-between"};
  .choices {
    width: calc(85% - 1rem);
    display: flex;
    justify-content: space-between;
    margin-right: 1rem;
    margin-bottom: 0.5rem;
  }

  .choices-3 div:last-child label {
    font-size: 11px;
    padding-top: 5px;
  }

  .choices-4 {
    width: 100%;
    margin-right: 0;
  }

  .radio-input {
    font-size: 14px;
    margin: 0;
    width: 100px;
  }
  .hide {
    display: none;
  }

  .ant-checkbox-group-item {
    display: block;
    color: ${colors.profileFontColor};
    font-size: 1rem;
  }

  .ant-checkbox-wrapper-checked {
    color: ${colors.green};
    font-weight: 900;
  }
`;

export const CommentsIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 33px;
  color: ${props => {
    return props.hasValue ? colors.green : colors.profileFontColor;
  }};
  margin: 0 auto;
  box-shadow: 0 0 0 1px ${colors.dustyGray1};
  box-shadow: ${props => {
    return props.hasValue ? "none" : `0 0 0 1px ${colors.dustyGray1}`;
  }};
  border: 1px solid
    ${props => {
      return props.hasValue ? colors.green : "transparent";
    }};
  border-radius: 3px;

  img {
    width: 28px;
    height: 28px;
  }
`;

export const StyledErrorMessage = styled.div`
  color: ${colors.red};
  font-weight: 100;
  font-size: 1rem;
  text-align: left;
  margin-bottom: 0rem;
`;

export const StyledInput = styled.label`
  border: 3px solid transparent;
  background: ${colors.lightGray};
  text-align: center;
  color: ${colors.lightGray};
  background-color: ${colors.white};
  box-shadow: 0 0 0 1px ${colors.lightGray};
  display: inline-block;
  height: 100%;
  width: 100%;
  vertical-align: center;
`;

export const InputWrapper = styled.div`
  color: ${colors.lightGray};

  .radio-button {
    display: none;
  }

  .yesno {
    border-radius: 3px;
  }
  width: 100%;
  margin-right: 14px;
  margin-right: ${({ options }) => (options === 4 ? "0" : "14px")};
  :last-child {
    margin-right: 0;
  }

  .options-4 {
    margin-right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .radio-button:checked + .yesno {
    box-shadow: none;
    border: 3px solid
      ${props => {
        if (props.option.toLowerCase() === "yes") {
          return colors.green;
        } else if (props.option.toLowerCase() === "no") {
          return colors.red;
        }
        return organizations[props.orgType].primary;
      }};
  }
`;

export const StyledButton = styled.button`
  font-size: 16px;
  border: 3px solid transparent;
  background: ${colors.lightGray};
  text-align: center;
  color: ${colors.lightGray};
  background-color: ${colors.white};
  box-shadow: 0 0 0 1px ${colors.lightGray};
  display: inline-block;
  padding: 1px 1rem;
  margin-right: 0.5rem;
`;

export const StyledCheckList = styled.div`
  flex-direction: column;
  width: 100%;
  display: flex;
  justify-content: flex-end;

  .icon-button {
    display: flex;
    align-self: flex-end;
  }
`;

export const SliderWrapper = styled.div`
  width: calc(85% - 1rem);
  display: flex;
  justify-content: space-between;
  margin-right: 1rem;
  margin-bottom: 0.5rem;
  flex-wrap: wrap;

  .ant-slider-with-marks {
    margin-top: 45px;
    margin-bottom: 0;
  }

  .ant-slider-handle {
    position: absolute;
    width: 28px;
    height: 28px;
    margin-top: -11px;
  }
  .ant-slider-track {
    background-color: ${({ color }) => color};
  }

  .ant-slider:hover .ant-slider-track {
    background-color: ${({ color }) => color}88;
  }

  .ant-slider:hover .ant-slider-rail {
    background-color: #b6b6b6;
  }

  .ant-slider-rail::after {
    content: "";
    width: 100%;
    height: 1px;
    z-index: 1;
    background: #cfced3;
    position: absolute;
    bottom: 25px;
  }

  .ant-slider-rail::before {
    content: "";
    width: 100%;
    height: 1px;
    z-index: 1;
    background: #cfced3;
    position: absolute;
    top: 25px;
  }

  p {
    font-family: ArialMT;
    font-size: 18px;
    line-height: 21px;
    /* identical to box height */

    text-align: center;
    letter-spacing: 0.375px;

    color: #4a4a4a;
    opacity: 0.8;
    width: 100%;
    visibility: ${({ visibility }) => (visibility ? "intial" : "hidden")};
  }
`;

export const VoiceIconWrapper = styled.div`
  width: 67px;
  height: 67px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  color: ${({recording}) => recording ? colors.red : colors.dustyGray2};
  margin-right: 1rem;
  

  :after {
    content: "";
    position: absolute;
    width: 67px;
    height: 67px;
    border: ${borders.commentBox};
    border-radius: 50%;
    animation: ${({recording}) => recording && "spin 2s linear infinite"};
    border-top: ${({recording}) => recording && borders.recording};

    @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
    }
}
`

export const VoiceWrapper = styled.div`
  display: flex;
  align-items: center;
`