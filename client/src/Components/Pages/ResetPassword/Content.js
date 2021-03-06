import React from "react";
import * as Yup from "yup";

import { Description, ContentWrapper, Wrapper } from "./ResetPassword.style";

import {
  StyledFormik as Formik,
  StyledForm as Form,
  StyledField,
  StyledFormikErrorMessage as FormikErrorMessage,
  Label,
  GeneralErrorMessage,
} from "../../Common/Formik/Formik.style";

import { LOGIN_URL } from "../../../constants/naviagationUrls";

import Logo from "../../Common/Logo";

import Button from "../../Common/Button";

export const ResetPassword = ({ error, handleSubmitReset }) => {
  const resetSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email")
      .required("Required"),
  });

  return (
    <>
      <ContentWrapper>
        <Formik
          initialValues={{ email: "" }}
          validationSchema={resetSchema}
          onSubmit={handleSubmitReset}
        >
          {({ isSubmitting }) => (
            <Form>
              <Description>
                Enter your email and we’ll send you a link to reset your
                password
              </Description>
              <Label htmlFor="email">
                Email
                <StyledField type="email" name="email" id="email" />
                <FormikErrorMessage name="email" component="p" />
              </Label>

              {error && <GeneralErrorMessage>{error}</GeneralErrorMessage>}
              <Button
                type="submit"
                disabled={isSubmitting}
                as="button"
                loading={isSubmitting}
                styleType="primary"
                text="Send link to my email"
              />
            </Form>
          )}
        </Formik>
      </ContentWrapper>
    </>
  );
};

export const SetPassword = ({ error, handleSubmitSet, match }) => {
  const setPasswordSchema = Yup.object().shape({
    password: Yup.string()
      .min(6)
      .required("Required"),
    rePassword: Yup.string()
      .required("Required")
      .equalTo(Yup.ref("password")),
  });

  const { token } = match.params;

  return (
    <>
      <Logo />
      <Description>Reset your password</Description>
      <Formik
        initialValues={{ password: "", rePassword: "" }}
        validationSchema={setPasswordSchema}
        onSubmit={(values, { setSubmitting }) =>
          handleSubmitSet(values, { setSubmitting }, token)
        }
      >
        {({ isSubmitting }) => (
          <Form>
            <Label htmlFor="password">
              New password
              <StyledField type="password" name="password" />
              <FormikErrorMessage name="password" component="p" id="password" />
            </Label>

            <Label htmlFor="rePassword">
              Confirm new password
              <StyledField type="password" name="rePassword" />
              <FormikErrorMessage
                name="rePassword"
                component="div"
                id="rePassword"
              />
            </Label>

            {error && <GeneralErrorMessage>{error}</GeneralErrorMessage>}
            <Button
              type="submit"
              disabled={isSubmitting}
              as="button"
              styleType="primary"
              text="Save password"
            />
          </Form>
        )}
      </Formik>
    </>
  );
};

export const PasswordSent = ({ history }) => {
  return (
    <Wrapper>
      <ContentWrapper>
        <Description>A password reset link was emailed to you</Description>
        <Button
          left
          type="submit"
          onClick={() => history.push("/")}
          styleType="primary"
          text="Got it"
        />
      </ContentWrapper>
    </Wrapper>
  );
};

export const PasswordDone = ({ history }) => {
  return (
    <Wrapper>
      <ContentWrapper>
        <Description>
          Great, you’ve set up a new password. Keep it safe!
        </Description>
        <Button
          left
          type="submit"
          onClick={() =>
            history.push({
              pathname: LOGIN_URL,
              state: { resetSuccess: true },
            })
          }
          styleType="primary"
          text="Will do"
        />
      </ContentWrapper>
    </Wrapper>
  );
};
