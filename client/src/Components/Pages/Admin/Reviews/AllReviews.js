import React, { Component } from "react";
import axios from "axios";
import { CSVLink } from "react-csv";
import styled from "styled-components";

import { Table, Modal, message, Input, Icon, Button } from "antd";

import { colors } from "../../../../theme";

import ReviewsColumns from "./ReviewsColumns";

// styling

const Wrapper = styled.div`
  padding-top: 2rem;
`;

const CSVButton = styled.a`
  padding: 1rem;
  border-radius: 3px;
  background-color: ${colors.heliotrope};
  margin: 2rem;
  color: ${colors.white};
  font-weight: 500;

  :hover,
  :focus {
    background-color: ${colors.heliotrope};
    color: ${colors.white};
    text-decoration: underline;
  }
`;

export default class AllReviews extends Component {
  state = {
    data: [],
    visible: false,
    id: "",
    exportData: "",
    exportQuestionHeaders: "",
  };

  CSVRef = React.createRef();

  getColumnSearchProps = dataIndex => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => this.handleSearch(selectedKeys, confirm)}
          style={{ width: 188, marginBottom: 8, display: "block" }}
        />
        <Button
          type="primary"
          onClick={() => this.handleSearch(selectedKeys, confirm)}
          icon="search"
          size="small"
          style={{ width: 90, marginRight: 8 }}
        >
          Search
        </Button>
        <Button
          onClick={() => this.handleReset(clearFilters)}
          size="small"
          style={{ width: 90 }}
        >
          Reset
        </Button>
      </div>
    ),
    filterIcon: filtered => (
      <Icon
        type="search"
        style={{ fontSize: "20px", color: filtered ? "#1890ff" : undefined }}
      />
    ),
    onFilter: (value, record) => {
      return record[dataIndex]
        .toString()
        .toLowerCase()
        .includes(value.toLowerCase());
    },
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => this.searchInput.select());
      }
    },
  });

  handleSearch = (selectedKeys, confirm) => {
    confirm();
    this.setState({ searchText: selectedKeys[0] });
  };

  handleReset = clearFilters => {
    clearFilters();
    this.setState({ searchText: "" });
  };

  showDeleteConfirm = id => {
    Modal.confirm({
      title: "Are you sure you want to delete this review?",
      okText: "Yes",
      okType: "danger",
      cancelText: "Cancel",
      onOk: () => {
        return new Promise((resolve, reject) => {
          axios
            .delete(`/api/admin/reviews`, {
              data: { id },
            })
            .then(() => {
              message.success("Deleted");
              this.fetchData();
              resolve();
            })
            .catch(err => {
              const error =
                err.response && err.response.data && err.response.data.error;
              message.error(error || "Something went wrong");
              this.fetchData();
            });
        });
      },
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.awaitingReview !== this.props.awaitingReview) {
      this.fetchData();
    }
  }

  fetchData = () => {
    const { organisationId, awaitingReview } = this.props;
    let query = "";
    if (organisationId) {
      query = `?organisation=${organisationId}`;
    } else if (awaitingReview) {
      query = "?awaitingReview=true";
    }

    axios
      .get(`/api/admin/reviews${query}`)
      .then(res => {
        this.setState({ data: res.data });
      })
      .catch(err => {
        const error =
          err.response && err.response.data && err.response.data.error;
        message.error(error || "Something went wrong");
        this.fetchData();
      });
  };

  componentDidMount() {
    this.fetchData();
  }

  getCSVData = () => {
    axios
      .get("/api/admin/export-all-reviews")
      .then(({ data }) => {
        this.setState(
          {
            exportData: data.cleanedReviews,
            exportQuestionHeaders: data.headers,
          },
          () => {
            this.CSVRef.current.link.click();
          }
        );
      })
      .catch(err => {
        const error =
          err.response && err.response.data && err.response.data.error;
        message.error(error || "Something went wrong");
      });
  };

  render() {
    return (
      <Wrapper>
        <CSVButton onClick={this.getCSVData}>Export all reviews</CSVButton>
        <div style={{ display: "none" }}>
          <CSVLink
            data={this.state.exportData}
            headers={this.state.exportQuestionHeaders}
            ref={this.CSVRef}
          >
            Export all reviews
          </CSVLink>
        </div>
        <Table
          columns={ReviewsColumns({
            deletHandler: this.showDeleteConfirm,
            getColumnSearchProps: this.getColumnSearchProps,
            searchText: this.state.searchText,
          })}
          dataSource={this.state.data}
          style={{ backgroundColor: "#ffffff", marginTop: "3rem" }}
          bordered
        />
      </Wrapper>
    );
  }
}
