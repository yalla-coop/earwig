import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { message } from "antd";

import Layout from "../../Common/Layout";
import Button from "../../Common/Button";
import Icon from "../../Common/Icon/Icon";

import {
  Wrapper,
  Body,
  Header,
  Title,
  SubTitile,
  Content,
} from "./PreReview.style";

export default class PreReview extends Component {
  state = {
    category: null,
    name: null,
  };

  async componentDidMount() {
    const { match, location } = this.props;
    const { state: locationState = {} } = location;
    const { name, category } = locationState;
    const { orgId } = match.params;

    if (!name || !category) {
      axios
        .get(`/api/organizations/${orgId}`)
        .then(({ data: { organisation } }) => {
          const { category: _category, name: _name } = organisation;
          this.setState({ category: _category, name: _name });
        })
        .catch(err => {
          const error =
            err.response && err.response.data && err.response.data.error;
          message.error(error || "Something went wrong");
        });
    } else {
      this.setState({ category, name });
    }
  }

  goBack = () => {
    const { match, history, location } = this.props;
    const { state: locationState = {} } = location;
    const { name, category } = locationState;
    const { orgId } = match.params;

    if (name && category) {
      history.goBack();
    } else {
      history.push(`/profile/${orgId}`);
    }
  };

  render() {
    const { match, location } = this.props;
    const { state: locationState = {} } = location;
    const { name: _name, category: _category } = locationState;
    const { category = _category, name = _name } = this.state;

    const { orgId } = match.params;

    return (
      <Layout type="center" maxWidth="57rem">
        <Wrapper>
          <Body>
            <Header category={category}>
              <Icon
                icon="overviewWhiteGrey"
                width="63"
                height="63"
                margin="0 0 32px 0"
                color="white"
              />
              <Title>
                You’re about to give a review about the {category} {name}
              </Title>
              <SubTitile>
                Make it as detailed as possible to help workers and they’ll give
                you points you can redeem for rewards.
              </SubTitile>
            </Header>
          </Body>
          <Content>
            <Link to={`/organization/${orgId}/review`}>
              <Button styleType="primary" text="Start your review" />
            </Link>

            <Button styleType="secondary" text="Cancel" onClick={this.goBack} />
          </Content>
        </Wrapper>
      </Layout>
    );
  }
}
