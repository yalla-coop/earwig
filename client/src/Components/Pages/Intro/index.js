import React, { Component } from "react";

import { Link } from "react-router-dom";
import { HOME_PAGE } from "../../../constants/naviagationUrls";

import Logo from "../../Common/Logo";

import {
  IntroWrapper,
  Iframe,
  VideoContainer,
  YellowDiv,
  BlackDiv,
  PurpleDiv,
  BlueDiv,
  Title,
  LogoWrapper
} from "./Intro.style";

import Button from "../../Common/Button";

export default class Intro extends Component {
  render() {
    return (
      <IntroWrapper>
        <VideoContainer>
          <LogoWrapper>
            <Logo />
          </LogoWrapper>
          <Title>An important message for workers</Title>
          <Iframe
            src="https://www.youtube.com/embed/nV2Wbg3pMPE?controls=0"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
          <Link to={HOME_PAGE}>
            <Button styleType="primary" text="Okay" />
          </Link>
        </VideoContainer>
        <YellowDiv backgroundColor="yellow" />
        <PurpleDiv backgroundColor="red" />
        <BlackDiv backgroundColor="black" />
        <BlueDiv backgroundColor="blue" />
      </IntroWrapper>
    );
  }
}
