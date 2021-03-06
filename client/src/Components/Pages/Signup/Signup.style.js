import { Link } from "react-router-dom";
import styled from "styled-components";
import Icon from "../../Common/Icon/Icon";
import { colors, breakpoints } from "../../../theme";

export const SignupWrapper = styled.div`
  display: flex;
`;

export const StyledLink = styled(Link).attrs({})`
  display: block;
  text-decoration: underline;
  margin-bottom: 3rem;
  font-size: 1.125rem;
  color: ${colors.heliotrope};
  font-weight: 900;

  &:hover,
  &:active {
    color: ${colors.heliotrope};
    text-decoration: underline;
  }
`;

export const LinkSpan = styled(Link)`
  color: ${colors.purpleLinks};
  font-size: 15px;
  font-weight: 700;
  text-decoration: underline;

  &:hover,
  &:active {
    color: ${colors.profileFontColor};
    text-decoration: underline;
  }
`;

export const ContentWrapper = styled.div`
  width: 100%;
  max-width: 25rem;
  margin: 0 auto;
  padding: 1rem 1.5rem;
  padding-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 100px;
  min-height: 100vh;

  & .paragraph {
    display: block;
    color: ${colors.profileFontColor};
    font-size: 1.8rem;
  }

  @media ${breakpoints.tablet} {
    padding-top: 6rem;
  }
`;

export const PurpleDiv = styled.div`
  width: 0%;
  background-color: ${colors.heliotrope};
  padding-bottom: 100px;

  @media ${breakpoints.tablet} {
    width: 50%;
  }
`;

export const OptionsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  color: ${colors.lightGray};
  width: 50%;
  min-width: 130px;

  .radio-button {
    display: none;
  }
`;

export const StyledInput = styled.label`
  display: inline-block;
  padding: 0.25rem 0rem;
  margin-bottom: 1rem;
  width: 90%;
  border: 1px solid;
  border-radius: 3px;
  font-size: 15px;
  box-shadow: 0px 4px 13px rgba(173, 145, 183, 0.273438);
  ${({ value, id }) =>
    value &&
    value.toLowerCase() === id.toLowerCase() &&
    `background-color: #4A4A4A;
      color: ${colors.white};
      border: 1px solid #4A4A4A;
      font-weight: bold`}
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const PopoverDiv = styled.div`
  text-align: left;
`;

// export const SelectWrapper = styled.div`
//   width: 100%;

//   .ant-select-lg .ant-select-selection--single {
//     height: 48px;
//   }

//   .ant-select-lg .ant-select-selection__rendered {
//     line-height: 48px;
//   }
// `;

// export const SubHeading = styled.h2`
//   font-weight: 900;
//   font-size: 1.125rem;

//   text-align: left;
//   margin-bottom: 0;
// `;

export const Paragraph = styled.p`
  font-size: 15px;
  text-align: left;
  color: ${colors.dustyGray};
  margin-bottom: 0.25rem;
`;

export const Example = styled.img`
  width: 100%;
  margin: 1rem auto;
`;

export const ImageInput = styled.input`
  display: none;
`;

export const ModalText = styled.p`
  font-weight: bold;
  color: ${colors.dustyGray2};
  text-align: center;
  margin-bottom: 0;
`;

export const LogIn = styled(Link)`
  position: absolute;
  right: 1rem;
  top: 1rem;
  font-size: 1.125rem;
  text-align: right;
  color: ${colors.dustyGray1};

  span {
    color: ${colors.primary};
    font-weight: bold;

    :hover {
      color: ${colors.primary};
    }
  }

  :hover {
    color: ${colors.dustyGray1};
  }
`;

export const EditIcon = styled(Icon)`
  width: 15vw;
  height: 15vw;
  max-width: 5rem;
  max-height: 5rem;
  margin-bottom: 1rem;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HeaderSection = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;

`;

export const HeaderTitle = styled.h1`
  font-size: 26px;
  font-weight: 400;
  text-align: center;
`;

export const SubTitle = styled.p`
  text-align: center;
  color: ${colors.black};
  opacity: 1;
`;