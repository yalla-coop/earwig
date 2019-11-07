import styled from "styled-components";
import { Link } from "react-router-dom";
import { EmailShareButton, WhatsappShareButton } from "react-share";

import { colors, organizations, shadows } from "../../../theme";

export const EmailShare = styled(EmailShareButton)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  background-color: ${colors.primary};
  width: 90px;
  box-shadow: ${shadows.buttonShadow};
  height: 45px;
  border-radius: 22.5px;
  color: ${colors.white};
  font-weight: bold;
  font-size: 12px;
  margin: 0 auto;
  :hover,
  :active,
  :focus {
    opacity: 0.8;
  }
`;

export const WhatsappShare = styled(WhatsappShareButton)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  background-color: ${colors.primary};
  width: 90px;
  box-shadow: ${shadows.buttonShadow};
  height: 45px;
  border-radius: 22.5px;
  color: ${colors.white};
  font-weight: bold;
  font-size: 12px;
  margin: 0 auto;
  :hover,
  :active,
  :focus {
    opacity: 0.8;
  }
`;

export const FbShare = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  background-color: ${colors.primary};
  width: 90px;
  box-shadow: ${shadows.buttonShadow};
  height: 45px;
  border-radius: 22.5px;
  color: ${colors.white};
  font-weight: bold;
  font-size: 12px;
  margin: 0 auto;
  :hover,
  :active,
  :focus {
    opacity: 0.8;
  }
`;

export const ThankYouWrapper = styled.div`
  width: 100%;
  max-width: 40rem;
  margin: 0 auto;
  padding: 0 0.5rem;
  padding-top: 6rem;
  padding-bottom: 100px;
`;

export const ContentWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  padding-bottom: 3rem;
`;

export const Image = styled.img`
  display: block;
  margin: 0 auto;
  width: 5rem;
  height: 5rem;
`;

export const Heading = styled.h1`
  color: ${colors.profileFontColor};
  font-size: 1.75rem;
  margin: 1.5rem 0 0.5rem 0;
  font-style: italic;
`;

export const Thanks = styled.p`
  color: ${colors.profileFontColor};
  font-size: 1.75rem;
  font-style: italic;
  margin-top: 1.5rem;
`;

export const Paragraph = styled.p`
  color: ${colors.profileFontColor};
  padding: 0 1rem;
`;

export const SubHeading = styled.h2`
  color: ${colors.profileFontColor};
  font-size: 1.125rem;
  margin-top: 2rem;
  text-align: left;
`;

export const List = styled.ul`
  color: ${colors.profileFontColor};
  padding-top: 0.5rem;

  & li {
    text-align: center;
    list-style-type: none;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const IconImg = styled.img`
  width: 14px;
`;

export const Icon = styled.i`
  font-size: 2rem;
  cursor: pointer;

  &:hover {
    color: #${props => props.color};
  }
`;

export const SharePromo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  /* height: 3.5rem; */
  border-radius: 6px;
  color: ${colors.profileFontColor};
  /* background-color: ${props => organizations[props.orgType].primary}; */
  /* margin-bottom: 2.5rem; */
  font-size: 1.25rem;
  font-weight: 700;
  margin: 1.5rem auto;
`;

export const StyledLink = styled(Link)`
  &,
  &:link,
  &:hover {
    font-family: Roboto;
    font-style: normal;
    font-weight: 900;
    font-size: 1.25rem;
    color: ${props => organizations[props.orgType].primary};
    text-underline-position: under;
    text-decoration: underline;
  }
`;

export const SquareSection = styled.section`
  border: 1px solid rgba(155, 155, 155, 0.525514);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
  padding: 1rem;
  margin: 1rem 0 2rem 0;
`;

export const PromoTitle = styled.h3`
  font-size: 2rem;
  line-height: 2.25rem;
  text-align: center;
  color: ${colors.profileFontColor};
`;
