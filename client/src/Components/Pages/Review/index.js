import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

// import MonthRangePicker from "react-monthrange-picker";
import moment from "moment";
import axios from "axios";
import * as Yup from "yup";
import classNames from "classnames";

import { Checkbox } from "antd";
import "antd/dist/antd.css";

import {
  ReviewRapper,
  SubmitButton,
  UserAgreement,
  CheckboxWrapper
} from "./Review.style";
import Question from "./Question/index";
import agencyIcon from "./../../../assets/agencyIcon.svg";
import clockLong from "./../../../assets/clockLong.svg";

import { initQueestionsValues } from "./initialQuestionsValues";
import { validationSchema } from "./validationSchema";

const STATIC_QUESTIONS = [
  {
    number: 18,
    text: "How would you rate this agency?",
    type: "rate",
    options: ["bad", "ok", "good", "cool", "very cool"]
  },
  {
    number: 19,
    text: "If you’d like to write an overall review, go ahead here",
    type: "overallReview",
    hintText:
      "To help other workers, please try to explain why something was or wasn't good."
  },
  {
    number: 20,
    text: "Share a voice review",
    hintText:
      "30 seconds max. Bear in mind that people may be able to identify you from your voice.",
    type: "voiceReview"
  }
];

class Review extends Component {
  state = {
    groups: [],
    organization: { category: "worksite", name: "Bournemouth University" },
    user: { email: "level3@earwig.com" }
  };
  componentDidMount() {
    axios
      .get("/api/questions/", {
        params: {
          organization: this.state.organization.category
        }
      })
      .then(res => {
        this.setState({ groups: res.data });
      })
      .catch(err => {
        console.log("err", err);
      });
  }

  handleSubmit = (values, { setSubmitting }) => {
    const { organization } = this.state;
    const { user } = this.state;
    const review = {
      values,
      organization,
      user
    };
    axios
      .post(`/api/review/${organization.category}`, review)
      .then(res => {
        this.props.history.push(`/thank-you`, {
          orgType: organization.category
        });
      })
      .catch(err => {
        console.log(err);
        // this.setState({ error: err.response.data.error });
        setSubmitting(false);
      });
  };

  render() {
    const initialValues = {
      questions: initQueestionsValues[this.state.organization.category],
      checklist: [],
      review: {
        workPeriod: "",
        rate: "",
        overallReview: "",
        voiceReview: ""
      },
      hasAgreed: false
    };
    if (!this.state && !this.state.groups[0]) {
      return null;
    }
    const {
      groups,
      organization: { name }
    } = this.state;
    return (
      <ReviewRapper>
        <section className="review-header">
          <div className="content">
            <div className="image-box">
              <img src={agencyIcon} alt="" className="header-icon" />
            </div>
            <div className="org">
              <p>You're reviewing:</p>
              <p className="org-name">{name}</p>
              <p className="review-info">
                18 questions <img src={clockLong} alt="" /> 2 mins
              </p>
            </div>
          </div>
        </section>

        <section className="questions">
          <Formik
            initialValues={initialValues}
            onSubmit={this.handleSubmit}
            validationSchema={
              validationSchema[this.state.organization.category]
            }
          >
            {({ values, isSubmitting, handleChange, errors }) => {
              return (
                <Form>
                  <div className="question-container questions">
                    <p>Select the month(s) you used this agency?</p>
                  </div>
                  <div className="questions">
                    {groups.map(group => {
                      return (
                        <div className="group-section" key={group.name}>
                          <h2>{group.group.text}</h2>
                          {group.questions.map(question => {
                            return (
                              <Question
                                key={question._id}
                                values={values}
                                handleChagne={handleChange}
                                question={question}
                                errors={errors}
                              />
                            );
                          })}
                        </div>
                      );
                    })}
                  </div>
                  <div className="questions">
                    <Question
                      {...values}
                      handleChagne={handleChange}
                      question={STATIC_QUESTIONS[0]}
                    />
                    <Question
                      {...values}
                      handleChagne={handleChange}
                      question={STATIC_QUESTIONS[1]}
                    />
                    <Question
                      {...values}
                      handleChagne={handleChange}
                      question={STATIC_QUESTIONS[2]}
                    />
                  </div>

                  <UserAgreement className="questions">
                    <h2>Submit your review</h2>
                    <CheckboxWrapper>
                      <Field
                        type="checkbox"
                        name={`hasAgreed`}
                        className="agreement-checkbox"
                        id="agreement"
                      />
                      <label className="agreement-label" htmlFor="agreement">
                        I agree to the earwig Terms of Use. This review of my
                        experience with this current or former agency is
                        truthful.
                      </label>
                      <ErrorMessage name={`hasAgreed`}>
                        {msg => {
                          return (
                            <div
                              className="error-msg"
                              style={{ color: "red", margin: "0 auto" }}
                            >
                              {msg}
                            </div>
                          );
                        }}
                      </ErrorMessage>
                    </CheckboxWrapper>
                  </UserAgreement>
                  <SubmitButton type="submit" disabled={isSubmitting}>
                    Submit your review
                  </SubmitButton>
                </Form>
              );
            }}
          </Formik>
        </section>
      </ReviewRapper>
    );
  }
}

export default Review;
