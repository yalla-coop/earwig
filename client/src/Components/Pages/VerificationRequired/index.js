import React, { Component } from "react";

import axios from "axios";
import { Modal, Spin } from "antd";

import Layout from "../../Common/Layout";

// constants
import { API_ADD_ORGANIZATION_URL } from "../../../apiUrls";
import { CONTACT_URL } from "../../../constants/naviagationUrls";

// common component
import Button from "../../Common/Button";

// styles
import {
  HeadlineDiv,
  H2,
  MainDiv,
  AddWrapper,
} from "../../Common/AddOrganisationPages.style";

export default class VerificationRequired extends Component {
  state = {
    isLoading: false,
  };

  goBack = () => {
    this.props.history.push("/search");
  };

  createNewOrg = () => {
    this.setState({ isLoading: true }, () => {
      const {
        orgName: name,
        orgCategory: category,
      } = this.props.location.state;

      const newOrg = { name, category };
      axios
        .post(API_ADD_ORGANIZATION_URL, newOrg)
        .then(({ data }) => {
          this.setState({ isLoading: false });

          const state = {
            name,
            category,
            needsVerification: true,
          };

          const { _id: orgId } = data;
          this.props.history.push({
            pathname: `/organization/${orgId}/review`,
            state,
          });
        })
        .catch(() => {
          this.setState({ isLoading: false });
          Modal.error({
            type: "error",
            title: "Oops...",

            content: (
              <div>
                <p>
                  {name} already exists. Please contact us directly with your
                  request.
                </p>
                <a href={CONTACT_URL}>Contact</a>
              </div>
            ),
          });
        });
    });
  };

  render() {
    const {
      location: { state: { orgName: name, orgCategory } = {} } = {},
    } = this.props;

    const { isLoading } = this.state;

    console.log({ orgCategory });
    return (
      <Layout type="side">
        <AddWrapper>
          <Spin tip="Loading..." spinning={isLoading}>
            <MainDiv>
              <HeadlineDiv>
                <H2>
                  Hold up! You need to be a verified worker to create a new
                  agency in our database.
                </H2>
                <div style={{ textAlign: "center" }}>
                  <Button
                    margin="2rem auto"
                    styleType="primary"
                    text="Start your review"
                    onClick={this.createNewOrg}
                  />
                </div>

                <Button
                  margin="0 auto"
                  styleType="secondary"
                  text="Cancel"
                  onClick={this.goBack}
                />
              </HeadlineDiv>
            </MainDiv>
          </Spin>
        </AddWrapper>
      </Layout>
    );
  }
}
