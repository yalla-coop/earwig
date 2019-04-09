import { Link } from "react-router-dom";
import styled from "styled-components";

import { colors } from "../../../theme";

export const SignupWrapper = styled.div.attrs({ className: "login" })`
  max-width: 60rem;
  margin: 0 auto;
  padding-top: 3rem;

  & .paragraph {
    display: block;
    color: ${colors.profileFontColor};
    font-size: 1.8rem;
  }
`;

export const StyledLink = styled(Link).attrs({})`
  display: block;
  text-decoration: none;
  margin-bottom: 3rem;
  font-size: 2rem;
  color: ${colors.profileFontColor};
  font-weight: 900;

  &:hover,
  &:active {
    text-decoration: none;
    color: ${colors.profileFontColor};
  }
`;

export const LinkSpan = styled(Link)`
  color: ${colors.purpleLinks};
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 700;

  &:hover,
  &:active {
    text-decoration: none;
    color: ${colors.profileFontColor};
  }
`;
