import styled from "styled-components";
import SVG from "react-inlinesvg";
import { NavLink } from "react-router-dom";

import { organizations, colors, shadows } from "../../../theme";

export const ReviewButtonsDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const ReviewType = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Time = styled.p`
  font-style: italic;
  margin: 0;
  color: ${colors.profileFontColor};
`;

export const ReviewButton = styled.button`
  background: ${props =>
    props.grayOut
      ? `${colors.dustyGray2}`
      : organizations[`${props.category}`].primary};
  color: ${colors.white};
  display: flex;
  justify-content: space-between;
  box-shadow: ${shadows.buttonShadow};
  border-radius: 300px;
  height: 3rem;
  padding: 0 1rem;
  align-items: center;
  width: 100%;
  z-index: -1;

  h4 {
    margin: 0;
    font-size: 15px;
    width: 70%;
    text-align: left;
    line-height: 0.9rem;
    font-weight: 700;
    color: ${colors.white};
  }

  p {
    margin: 0;
    font-size: 0.9rem;
    font-style: italic;
    margin-right: 0.5rem;
  }
`;

export const FullLink = styled(NavLink)`
  display: flex;
  width: 100%;
  max-width: 18rem;
  margin-left: 0.5rem;
  cursor: pointer;
`;

export const Icon = styled(SVG)`
  margin: ${props => props.margin};
`;
