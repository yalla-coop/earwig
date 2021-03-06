import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Icon from "../Icon/Icon";

import { colors, shadows } from "../../../theme";

export const Wrapper = styled.div`
  height: 100%;
  position: fixed;
  background: ${colors.white};
  display: flex;
  padding-top: 0.5rem;
  padding-left: 1rem;
  flex-direction: column;
  top: 0;
  left: 0;
  width: ${props => (props.isMobile ? `100%` : "33%")};
  /* padding-top: ${props => !props.isMobile && "4rem"}; */
  z-index: 3;
  box-shadow: ${shadows.buttonShadow};
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 0px;
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
  }
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  /* if you want to do any styling on active link then assign to this class */
  /* .active {
    padding-left: 2rem;
  } */
`;

export const MenuItem = styled(NavLink)`
  display: flex;
  text-decoration: none;
  /* border-style: solid;
  border-width: 0px 1px 1px 1px;
  border-color: ${colors.heliotrope};
  border-radius: 3px; */
  color: ${colors.primary};
  padding: 0.5rem;
  padding-right: ${({ extraRightPadding }) =>
    extraRightPadding ? "1.25rem" : "0.5rem"}
  padding-left: 1rem;
  transition: all ease-in 0.2s;
  height: 3.5rem;
  min-height: 54px;
  align-items: center;
  text-align: left;
  font-size: 1.125rem;
  font-weight: bold;
  text-decoration: ${props => props.active && "underline"};
  cursor: ${props => props.disabled && "not-allowed"};

  .menuIcon {
    margin-right: 1rem;
  }

  :hover {
    padding-left: 1.5rem;
    color: ${colors.primary};
  }
`;

export const PriorityMenuItem = styled(MenuItem)`
  border: none;
  padding: 1.3rem;
  font-size: 15px;
  margin-bottom: 1px;
  color: ${colors.white};
  background-color: ${colors.heliotrope};
  cursor: ${props => props.disabled && "not-allowed"};

  :hover {
    padding-left: 1.5rem;
    color: ${colors.white};
  }
`;

export const ComingSoon = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  opacity: 0.6;

  p {
    padding: 0;
    margin: 0;
    color: ${props => (props.purple ? colors.heliotrope : colors.primary)};
    width: 100%;
  }

  span {
    font-weight: 300;
    font-size: 14px;
    width: 8rem;
    color: ${props => (props.purple ? colors.heliotrope : colors.primary)};
    text-align: center;
    margin: 0 auto;
  }
`;

export const LogoutButton = styled.div`
  display: flex;
  text-decoration: none;
  color: ${colors.primary};
  padding: 0.5rem;
  transition: all ease-in 0.2s;
  height: 3.5rem;
  min-height: 54px;
  align-items: center;
  text-align: left;
  cursor: pointer;
  font-weight: bold;
  padding-left: 1rem;
  font-size: 1.125rem;

  .menuIcon {
    margin-right: 1rem;
  }

  :hover {
    padding-left: 1.5rem;
    color: ${colors.primary};
  }
`;

export const MenuIcon = styled(Icon)`
  margin-right: 1rem;
  color: ${colors.primary};
`;

export const PriorityIcon = styled(Icon)`
  margin-right: 1rem;
  color: ${colors.primary};
  opacity: ${props => props.disabled && "0.6"};
`;

export const MenuWrapper = styled.section`
  display: flex;
  padding-top: 1rem;
  flex-direction: column;
`;
