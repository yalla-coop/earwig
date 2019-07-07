import React, { Component } from "react";
import axios from "axios";
import { Modal, Alert } from "antd";

// COMMON
import CancelNavbar from "./../../Common/CancelNavbar";
import Button from "./../../Common/Button";
import Select from "./../../Common/Select";

// STYLING
import {
  EditWrapper,
  BorderedWrapper,
  Title,
  SubTitle,
  Paragraph,
  CurrentValue,
  InputLabel,
  Input,
  ErrorMessage,
  FieldError,
  InputDiv
} from "./EditProfile.style";

// API ROUTES
const { API_TRADE_URL, API_USERS_TRADE } = require("../../../apiUrls");

export default class EditProfileSection extends Component {
  // EDIT TRADE

  state = {
    oldPassword: "",
    newPassword: "",
    reNewPassword: "",
    verificationImage: "",
    imageFile: "",
    newUsername: "",
    newTrade: "",
    newCity: "",
    isSubmitting: false,
    errors: {},
    serverError: "",
    fields: {},
    ismodalVisible: false,
    currentTradeName: "",
    section: null,
  };

  componentDidMount() {
    const { section } = this.props;

    this.setState({ section })

    if (section === "trade") {
      axios.get(API_TRADE_URL).then(res => {
        const { data } = res;
        const trades = data.reduce((accu, current) => {
          accu.push({ value: current._id, label: current.title });
          return accu;
        }, []);
        this.setState({ trades });
      });

      axios.get(API_USERS_TRADE).then(({data}) => {
        this.setState({ currentTradeName: data.title}) 
      })
    }
  }

  showModal = () => {
    this.setState({
      ismodalVisible: true
    });
  };

  handleOk = () => {
    if (this.state.newTrade && this.state.newTrade.length >= 3) {
      this.setState(
        {
          confirmLoading: true
        },
        () => {
          axios
            .post(API_TRADE_URL, { trade: this.state.newTrade })
            .then(res => {
              const { data } = res;

              this.setState({
                trades: [{ value: data._id, label: data.title }],
                tradeId: data._id,
                disableSelect: true
              });

              this.setState(
                {
                  newTradeSuccess: true
                },
                () => {
                  setTimeout(() => {
                    this.setState({
                      newTradeSuccess: false,
                      ismodalVisible: false,
                      confirmLoading: false
                    });
                  }, 1000);
                }
              );
            })
            .catch(err => {
              this.setState(
                {
                  newTradeSuccess: false,
                  newTradeError: err.response.data.error
                },
                () => {
                  setTimeout(() => {
                    this.setState({
                      ismodalVisible: false,
                      confirmLoading: false
                    });
                  }, 1000);
                }
              );
            });
        }
      );
    } else if (this.state.newTrade.length < 3) {
      this.setState({
        newTradeError: "Trade must be at least 3 characters long"
      });
    }
  };

  handleCancel = () => {
    this.setState({
      ismodalVisible: false,
      newTradeSuccess: false,
      newTradeError: ""
    });
  };

  handleChange = value => {
    const { fields } = this.state;
    fields.newTrade = value;

    this.setState({ tradeId: value, fields });
  };

  handleInput = event => {
    const { name, value } = event.target;
    const { fields } = this.state;
    fields[name] = value;
    this.setState({ fields });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { fields, section } = this.state;

    // this.setState({ isSubmitting: true });

    const isValid = this.submitValidation(section)

    if(isValid) {
      axios
        .post("/api/edit-profile", fields)
        .then(({ data }) => {
          this.props.handleChangeState({ ...data, isLoggedIn: true });
          this.props.history.push("/my-profile");
          this.setState({ isSubmitting: false });
        })
        .catch(err => {
          this.setState({ serverError: err.response.data.error, isSubmitting: false });
        });
    }

  };

  onBlurValidation = event => {
    const { name, value } = event.target;
    let { errors } = this.state;

    // remove that field from errors if already there
    if (errors[name]) delete errors[name]

    // VALIDATION
    const newError = this.fieldValidation(name, value)
    errors = {...errors, ...newError}

    this.setState({ errors });
  };

  fieldValidation = (name, value) => {
    const errors = {};
    const { fields } = this.state;

    // PASSWORD VALIDATION
    if (name === "oldPassword") {
      if (!value) {
        errors[name] = "Required";
      } else if (value.length < 6) {
        errors[name] = "Password must be at least 6 characters long";
      }
    } else if (name === "newPassword") {
      if (!value) {
        errors[name] = "Required";
      } else if (value.length < 6) {
        errors[name] = "Password must be at least 6 characters long";
      } else if (value === fields.oldPassword) {
        errors[name] = "New password must be different to old password";
      }
    } else if (name === "reNewPassword") {
      if (!value) {
        errors[name] = "Required";
      } else if (value !== fields.newPassword) {
        errors[name] = "Passwords do not match";
      }
    }

    // USERNAME VALIDATION
    if (name === "newUsername") {
      if (!value) {
        errors[name] = "Required";
      } else if (value.length < 6 || value.length > 15) {
        errors[name] = "Username must be between 6 and 15 characters long";
      }
    }

    return errors;
  }

  submitValidation = (type) => {
    let { errors, fields } = this.state;
    errors = {};
    let requiredFields;

    if (type === "earwigId") {
        requiredFields = ["newUsername"]
    }

    if (type === "password") {
      requiredFields = ["oldPassword", "newPassword", "reNewPassword"]
    }

    if (type === "trade") {
      requiredFields = ["newTrade"]
    }

    if (type === "city") {
      requiredFields = ["newCity"]
    }

      // check if any required fields haven't been filled in
      const fieldNames = Object.keys(fields)
      requiredFields.map(type => {
        if (fieldNames.includes(type) === false) {
          return errors[type] = "Required"
        } else return null;
       })
      
      // check for any other errors with the fields submitted
      const fieldArr = Object.entries(fields);
      fieldArr.map(field => {
        const newError = this.fieldValidation(field[0], field[1])
        return errors = {...errors, ...newError}
    })
    

    this.setState({ errors })
    return Object.entries(errors).length > 0 ? false : true;
  }

  render() {
    const { history, section, userId, city } = this.props;
    const {
      isSubmitting,
      errors,
      serverError,
      ismodalVisible,
      confirmLoading,
      currentTradeName,
    } = this.state;

    return (
      <>
        <CancelNavbar history={history} CancelText="Back" />
        <EditWrapper>
          <BorderedWrapper>
            {section === "earwigId" && (
              <div>
                <Title>Warning!</Title>
                <SubTitle>
                  To avoid the threat of blacklisting, we recommend you do not
                  use your real name or any name that could identify you
                </SubTitle>
                <Paragraph>
                  Whilst your earwig ID is the only thing that is shown beside
                  your reviews and activity, it is publicly visible
                </Paragraph>
                <CurrentValue>Current eawig ID: {userId}</CurrentValue>
                <InputDiv>
                  <InputLabel htmlFor="newUsername">New earwig ID</InputLabel>
                  <Input
                    type="text"
                    name="newUsername"
                    id="newUsername"
                    onChange={this.handleInput}
                    onBlur={this.onBlurValidation}
                  />
                  <FieldError>{errors.newUsername}</FieldError>
                </InputDiv>
              </div>
            )}
            {section === "password" && (
              <div>
                <InputDiv>
                  <InputLabel htmlFor="oldPassword">Old password</InputLabel>
                  <Input
                    type="password"
                    name="oldPassword"
                    id="oldPassword"
                    onChange={this.handleInput}
                    onBlur={this.onBlurValidation}
                  />
                  <FieldError>{errors.oldPassword}</FieldError>
                </InputDiv>
                <InputDiv>
                  <InputLabel htmlFor="newPassword">New password</InputLabel>
                  <Input
                    type="password"
                    name="newPassword"
                    id="newPassword"
                    onChange={this.handleInput}
                    onBlur={this.onBlurValidation}
                  />
                  <FieldError>{errors.newPassword}</FieldError>
                </InputDiv>
                <InputDiv>
                  <InputLabel htmlFor="reNewPassword">
                    Confirm new password
                  </InputLabel>
                  <Input
                    type="password"
                    name="reNewPassword"
                    id="reNewPassword"
                    onChange={this.handleInput}
                    onBlur={this.onBlurValidation}
                  />
                  <FieldError>{errors.reNewPassword}</FieldError>
                </InputDiv>
              </div>
            )}
            {section === "trade" && (
              <div>
                <InputDiv>
                <CurrentValue>Current trade: {currentTradeName}</CurrentValue>
                  <InputLabel htmlFor="newTrade">New trade</InputLabel>
                  <Select
                    id="newTrade"
                    name="newTrade"
                    placeholder={"Select your trade"}
                    options={this.state.trades}
                    handleChange={value => {
                      this.handleChange(value);
                    }}
                    value={this.state.tradeId}
                    disabled={this.state.disableSelect}
                    isCreateNew
                    showSearch
                    addHandler={this.showModal}
                  />
                  <FieldError>{errors.newTrade}</FieldError>
                </InputDiv>
                <div>
                  <div>
                    <Modal
                      title="Add new trade"
                      visible={ismodalVisible}
                      onOk={this.handleOk}
                      confirmLoading={confirmLoading}
                      onCancel={this.handleCancel}
                    >
                      {this.state.newTradeError && (
                        <>
                          <Alert
                            message={this.state.newTradeError}
                            type="error"
                            showIcon
                          />
                          <br />
                        </>
                      )}
                      {this.state.newTradeSuccess && (
                        <>
                          <Alert
                            message="Trade added successfully"
                            type="success"
                            showIcon
                          />
                          <br />
                        </>
                      )}
                      <Input
                        autoFocus
                        placeholder="Add your trade..."
                        allowClear
                        onChange={this.addNewTradeHandler}
                      />
                    </Modal>
                  </div>
                </div>
              </div>
            )}
            {section === "city" && (
              <div>
                <CurrentValue>Current town or city: {city}</CurrentValue>
                <InputLabel htmlFor="newCity">New town or city</InputLabel>
                <Input
                  type="text"
                  name="newCity"
                  id="newCity"
                  onChange={this.handleInput}
                  onBlur={this.onBlurValidation}
                />
                <FieldError>{errors.newCity}</FieldError>
              </div>
            )}
            <div>
              <ErrorMessage>{serverError}</ErrorMessage>
              <Button
                onClick={this.handleSubmit}
                disabled={isSubmitting}
                loading={isSubmitting}
              >
                {section === "earwigId" && "Save new ID"}
                {section === "password" && "Save new password"}
                {section === "trade" && "Save new trade"}
                {section === "city" && "Save new town or city"}
              </Button>
            </div>
          </BorderedWrapper>
        </EditWrapper>
      </>
    );
  }
}