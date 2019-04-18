import React, { Component } from "react";
import * as Yup from "yup";
import axios from "axios";

import {
  EditWrapper,
  VerifiedWrapper,
  UnVerifiedWrapper,
  Section,
  Title,
  Row,
  EditButton,
  PasswordWrapper,
  LightLabel as Label,
  ImageInput,
  StyledButton as Button,
  StyledLink,
  StatusWrapper,
  Status,
  UnVerifiedTitle,
  Paragraph,
  UnVerifiedButton
} from "./EditProfile.style";

import {
  StyledFormik as Formik,
  StyledForm as Form,
  StyledField as Field,
  StyledFormikErrorMessage as FormikErrorMessage
} from "./../../Common/Formik/Formik.style";

import cardImage from "./../../../assets/card-hand.svg";

const initalValues = {
  oldPassword: "",
  newPassword: "",
  reNewPassword: "",
  verificationImage: "",
  imageFile: ""
};

// create custom function
function equalTo(ref, msg) {
  return this.test({
    name: "equalTo",
    exclusive: false,
    message: msg || "Not match",
    params: {
      reference: ref.path
    },
    test: function(value) {
      return value === this.resolve(ref);
    }
  });
}

Yup.addMethod(Yup.string, "equalTo", equalTo);

export default class EditProfile extends Component {
  state = {
    displayPassword: false
  };

  handleImageChange = event => {
    const image = event.target.files && event.target.files[0];
    var reader = new FileReader();

    reader.onload = () => {
      var dataURL = reader.result;
      this.setState({
        image: dataURL
      });
    };
    this.setState(
      {
        imageFile: image
      },
      () => {
        image && reader.readAsDataURL(image);
      }
    );
  };

  handleSubmit = (values, { setSubmitting }) => {
    const form = new FormData();

    // const arrays = Object.keys(values);
    if (this.state.displayPassword || this.state.imageFile) {
      if (this.state.displayPassword) {
        form.append("oldPassword", values.oldPassword);
        form.append("newPassword", values.newPassword);
        form.append("reNewPassword", values.reNewPassword);
      }
      if (this.state.imageFile) {
        form.append("verificationImage", this.state.imageFile);
      }

      axios({
        method: "post",
        url: "/api/edit-profile",
        data: form,
        headers: {
          "content-type": `multipart/form-data; boundary=${form._boundary}`
        }
      })
        .then(({ data }) => {
          this.props.handleChangeState({ ...data, isLoggedIn: true });
          this.props.history.push(`/profile`);
        })
        .catch(err => {
          this.setState({ error: err.response.data.error });
          setSubmitting(false);
        });
      setSubmitting(false);
    } else {
      setSubmitting(false);
    }
  };

  togglePassword = () => {
    this.setState({ displayPassword: !this.state.displayPassword });
  };

  render() {
    const editProfileSchema = Yup.object().shape(
      this.state.displayPassword
        ? {
            oldPassword: Yup.string().required("Required"),
            newPassword: Yup.string()
              .min(6)
              .required("Required"),
            reNewPassword: Yup.string()
              .required("Required")
              .equalTo(Yup.ref("newPassword"))
          }
        : null
    );

    const { userId, email, verified } = this.props;

    return (
      <EditWrapper>
        {verified ? (
          <VerifiedWrapper>
            <Section>
              <Title>ID: {userId}</Title>
            </Section>
            <Section>
              <Title title={email}>{email}</Title>
            </Section>
            <Formik
              initialValues={initalValues}
              validationSchema={editProfileSchema}
              onSubmit={this.handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form>
                  <Section>
                    <Row>
                      <Title>Password</Title>
                      <EditButton type="button" onClick={this.togglePassword}>
                        Edit
                      </EditButton>
                    </Row>
                    {this.state.displayPassword && (
                      <PasswordWrapper>
                        <Label htmlFor="oldPassword">
                          Old Password
                          <Field
                            type="password"
                            name="oldPassword"
                            id="oldPassword"
                          />
                          <FormikErrorMessage
                            name="oldPassword"
                            component="p"
                          />
                        </Label>

                        <Label htmlFor="newPassword">
                          New Password
                          <Field
                            type="password"
                            name="newPassword"
                            id="newPassword"
                          />
                          <FormikErrorMessage
                            name="newPassword"
                            component="p"
                          />
                        </Label>

                        <Label htmlFor="reNewPassword">
                          Re-Enter New Password
                          <Field
                            type="password"
                            name="reNewPassword"
                            id="reNewPassword"
                          />
                          <FormikErrorMessage
                            name="reNewPassword"
                            component="p"
                          />
                        </Label>
                      </PasswordWrapper>
                    )}
                  </Section>
                  <Section>
                    <Row>
                      <div className="row__image-container">
                        <img src={cardImage} alt="card icon" />
                        <Title>Verification photo</Title>
                      </div>
                      <Field
                        name="verificationImage"
                        render={({ field, form: { isSubmitting } }) => (
                          <ImageInput
                            {...field}
                            type="file"
                            placeholder="lastName"
                            accept="image/*"
                            id="verificationImage"
                            onChange={this.handleImageChange}
                          />
                        )}
                      />
                      <FormikErrorMessage
                        name="verificationImage"
                        component="p"
                      />
                      <EditButton htmlFor="verificationImage" as="label">
                        Edit
                      </EditButton>
                    </Row>
                  </Section>
                  <Button type="submit" disabled={isSubmitting}>
                    Save Changes
                  </Button>
                </Form>
              )}
            </Formik>
            <StyledLink to="/profile">Cancel Changes</StyledLink>
          </VerifiedWrapper>
        ) : (
          <UnVerifiedWrapper>
            <StatusWrapper>
              <Status>Unverified</Status>
            </StatusWrapper>
            <UnVerifiedTitle>Your reviews and impact</UnVerifiedTitle>
            <Paragraph>
              If you want to search jobs, help other workers by giving reviews
              and comment on other reviews, you need to get verified as a
              genuine worker.
              <br />
              <br />
              This protects the worker community from fake reviews and spam by
              non-workers.
            </Paragraph>
            <UnVerifiedButton to="/upload-verification-photo">
              <img src={cardImage} alt="card icon" />
              <Title>Verification photo</Title>
            </UnVerifiedButton>
          </UnVerifiedWrapper>
        )}
      </EditWrapper>
    );
  }
}
