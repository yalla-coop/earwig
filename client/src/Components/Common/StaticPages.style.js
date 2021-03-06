import styled from "styled-components";
import { Link } from "react-router-dom";

import { colors, shadows, breakpoints, borders } from "../../theme";
import { MOBILE_WIDTH } from "../../constants/screenWidths";

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
  display: flex;
  padding-top: 3rem;
`;

export const ContentWrapper = styled.div`
  padding: 5rem 2rem 2rem 2rem;
  margin-bottom: 3rem;
  width: 100%;
  padding-bottom: 100px;

  @media ${breakpoints.tablet} {
    width: ${({ width }) => width || "100%"};
    padding-top: 6rem;
  }

  .table {
    table {
      font-family: arial, sans-serif;
      border-collapse: collapse;
      width: 100%;
      font-size: 14px;
    }

    td,
    th {
      border: 1px solid #dddddd;
      text-align: left;
      padding: 8px;
      min-width: 70px;
    }

    tr:nth-child(even) {
      background-color: #dddddd2e;
    }
    th {
      font-weight: 700;
    }
  }
`;

export const PurpleDiv = styled.div`
  width: 0%;
  background-color: ${colors.heliotrope};
  padding-bottom: 100px;

  @media ${breakpoints.tablet} {
    width: ${({ width }) => width || "50%"};
  }
`;

export const BlueDiv = styled.div`
  width: 0%;
  background-color: ${colors.dodgerBlue};
  padding-bottom: 100px;

  @media ${breakpoints.tablet} {
    width: ${({ width }) => width || "50%"};
  }
`;

export const MainIcon = styled.img`
  min-width: 2.5rem;
  max-width: 3.75rem;
  width: 10%;
  text-align: center;
  margin: 0 auto 0.5rem;
  display: block;

  @media (max-width: ${MOBILE_WIDTH}px) {
    margin: 1rem auto 0.5rem;
  }
`;

export const PageTitle = styled.h1`
  font-weight: 500;
  font-size: 2.625rem;
  text-align: left;

  color: ${colors.profileFontColor};
`;

export const SubTitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem 0 2.5rem 0;
  border-bottom: ${borders.commentBox};
  margin-bottom: 2rem;
`;

export const SubTitle = styled.h4`
  font-weight: ${props => (props.sublist ? "700" : "900")};
  font-size: ${props => (props.list ? "1rem" : "1.125rem")};
  color: ${colors.profileFontColor};
  text-decoration: underline;
  text-align: ${({ center }) => (center ? "center" : "left")};
  margin-bottom: ${({ marginBottom }) => (marginBottom ? "1.5rem" : "0")};
  margin-top: ${props => (props.list ? "1rem" : "1.5rem")};
  padding-left: ${({ sublist }) => sublist && "1rem"};
  margin-top: ${props => props.sublist && "0.5rem"};

  @media (min-width: ${MOBILE_WIDTH}px) {
    font-size: 1.5rem;
    padding-top: 3rem;
  }
`;

export const TopSubTitle = styled.h4`
  font-weight: ${props => (props.sublist ? "400" : "900")};
  font-size: ${props => (props.list ? "1rem" : "1.125rem")};
  color: ${colors.heliotrope};
  text-decoration: underline;
  text-align: ${({ center }) => (center ? "center" : "left")};
  /* margin-bottom: ${({ marginBottom }) => (marginBottom ? "1.5rem" : "0")};
  margin-top: ${props => (props.list ? "1rem" : "1.5rem")}; */
  padding-left: ${({ sublist }) => sublist && "1rem"};
  padding-top: ${props => !props.sublist && "1rem"};
  margin: 0;
  margin-bottom: 1rem;

  @media (min-width: ${MOBILE_WIDTH}px) {
    font-size: 1.5rem;
    /* padding-top: 3rem; */
  }
`;

export const SectionHeading = styled(TopSubTitle)`
  color: ${colors.black2};
  text-decoration: none;
  font-weight: ${props => (props.sublist ? "500" : "900")};
  padding-left: 0;
`;

export const SmallParagraph = styled.p`
  font-size: 15px;
  margin-bottom: 2rem;
  color: ${colors.profileFontColor};
  text-align: ${({ center }) => (center ? "center" : "left")};
  @media (min-width: ${MOBILE_WIDTH}px) {
    font-size: 1.125rem;
  }
`;

export const StyledOl = styled.ol`
  font-size: 15px;
  margin-bottom: 2rem;
  color: ${colors.profileFontColor};
  text-align: ${({ center }) => (center ? "center" : "left")};
  padding-left: 2rem;
  @media (min-width: ${MOBILE_WIDTH}px) {
    font-size: 1.125rem;
  }
`;

export const BoldLink = styled(Link)`
  font-size: 15px;

  color: ${colors.primary};
  text-align: left;
  font-weight: 700;
  text-decoration: none;

  :hover {
    color: ${colors.primary};
  }

  @media (min-width: ${MOBILE_WIDTH}px) {
    font-size: 1.125rem;
  }
`;

export const Iframe = styled.iframe`
  width: 100%;
  height: 49vw;
  max-height: 315px;
  box-shadow: ${shadows.frameShadow};
  max-width: 560px;
  margin-bottom: 2rem;

  @media ${breakpoints.tablet} {
    height: 27vw;
  }
`;

export const LargeParagraph = styled.p`
  font-size: 1.5rem;
  color: ${colors.profileFontColor};
  text-align: ${({ left }) => (left ? "left" : "center")};
  margin-top: 3rem;
  font-style: italic;
`;

export const TextArea = styled.textarea`
  width: 100%;
  max-width: 40rem;
  height: 8.5rem;
  border: 1px solid ${colors.inputBorder};
  border-radius: 5px;
  outline: none;
  padding: 1rem;
  box-shadow: ${shadows.buttonShadow};
`;

export const Button = styled.button`
  color: ${colors.white};
  border: none;
  box-shadow: ${shadows.buttonShadow};
  border-radius: 3px;
  width: 100%;

  font-weight: 900;
  font-size: 1.125rem;
  background-color: ${colors.heliotrope};
  outline: none;
  display: block;
  padding: 0.75rem 0;
  cursor: pointer;
  margin: 2rem auto;

  &:active {
    box-shadow: none;
  }

  &:active,
  &:focus {
    outline: none;
  }
`;

export const Devider = styled.div`
  width: 100%;
  height: 1px;
  border-bottom: 1px solid ${colors.alto};
  margin: 5rem auto;

  @media (max-width: ${MOBILE_WIDTH}px) {
    display: none;
  }
`;

export const UnderlinedLink = styled(BoldLink).attrs({
  className: "UnderlinedLink",
})`
  text-decoration: none;
  font-size: 1.125rem;
  text-align: center;
  margin: 0 auto;
  cursor: pointer;

  @media (max-height: 600px) {
    margin-top: -1rem;
    margin-bottom: 1rem;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  .UnderlinedLink {
    margin: 0 auto;
    @media (max-height: 600px) {
      margin: 0 auto;
    }
  }
`;

export const LargeLink = styled(Link)`
  font-family: Roboto;
  font-weight: 900;
  font-size: 18px;
  color: ${({ primary }) => (primary ? colors.primary : "#4a4a4a")};
  text-decoration: underline;
  text-align: left;
  font-size: 1.125rem;
  display: block;
  margin-bottom: 20px;

  &:hover {
    text-decoration: underline;
    color: ${colors.primary};
  }

  @media ${breakpoints.tablet} {
    font-size: 1.5rem;
  }
`;

export const NormalLink = styled(Link)`
  color: ${colors.primary};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    color: ${colors.primary};
  }
`;

export const Ol = styled.ol`
  list-style-type: none;
  counter-reset: item;
  margin: 0;
  padding: 0;
  color: ${colors.profileFontColor};
  font-size: 16px;
  line-height: 36px;
  margin-bottom: 20px;
  font-weight: normal;
  text-align: left;

  @media (max-width: ${MOBILE_WIDTH}px) {
    font-size: 14px;
    line-height: 30px;
  }

  & > li {
    display: table;
    counter-increment: item;
    margin-bottom: 0.6em;
  }

  & > li:before {
    display: table-cell;
    padding-right: 0.3em;
    ${({ showFirstNumber }) =>
      showFirstNumber && `content: counters(item, ".") ". ";`}
  }
`;

export const Li = styled.li`
  font-weight: normal;

  ol > li {
    margin: 0;
  }

  ol > li:before {
    content: counters(item, ".") " ";
  }
`;

export const SmallTitle = styled.h4`
  font-weight: 900;
  font-size: 1.125rem;
  color: ${colors.profileFontColor};
  text-align: center;

  @media (min-width: ${MOBILE_WIDTH}px) {
    font-size: 1.5rem;
    padding-top: 1rem;
  }
`;

export const SelectWrapper = styled.div`
  width: 100%;
  .ant-select-lg .ant-select-selection--single {
    height: 48px;
  }
  .ant-select-lg .ant-select-selection__rendered {
    line-height: 48px;
  }
`;

export const BoldWord = styled.span`
  font-weight: bold;
`;
export const BasicLink = styled.a`
  color: ${colors.profileFontColor};
  text-decoration: underline;

  :hover {
    color: ${colors.heliotrope};
  }
`;
