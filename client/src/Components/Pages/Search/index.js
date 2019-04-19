import React, { Component } from "react";
import axios from "axios";
import Autosuggest from "react-autosuggest";
import { API_SEARCH_URL } from "../../../apiUrls";
import { ADD_PROFILE_URL } from "../../../constants/naviagationUrls";

// UI helper functions
import { SVGCreator, StarRateCreator, SortArrayNewest } from "../../../helpers";

// styles
import {
  AutosuggestWrapper,
  HeadlineDiv,
  RowDiv,
  ItemDiv,
  SearchLegendDiv,
  SymbolDiv,
  OrganisationDetailsDiv,
  AddItemDetails,
  ReviewDetailsDiv,
  InnerDivLastReviews,
  InnerDivSuggestions,
  ArrowDiv,
  SearchWrapper,
  SuggestionBox,
  AddItemBox,
  LegendTitle,
  ReviewsFrame,
  ProfileLink,
  AddProfileLink,
  ReviewsContainer
} from "./Search.style";

import { organizationIcons } from "./../../../theme";

export const axiosCall = async () => {
  const response = await axios.get(API_SEARCH_URL);
  return response;
};

// gets called when suggestions gets clicked
export const getSuggestionValue = suggestion => suggestion.name;

export const getSuggestions = (value, organisationsArray) => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;
  const suggestions = organisationsArray.filter(
    org => org.name.toLowerCase().slice(0, inputLength) === inputValue
  );

  // in case there are no suggestions still return a value enabling the 'add' box to be rendered
  if (suggestions.length === 0) {
    return [{ isEmpty: true }];
  }

  return suggestions;
};

export default class Search extends Component {
  state = {
    isLoading: false,
    data: null,
    value: "",
    suggestions: []
  };

  componentDidMount() {
    axiosCall().then(organizations => {
      this.setState({
        data: organizations.data,
        isLoading: true
      });
    });
  }

  // functions for autosuggest component
  // create suggestions array based on user input

  // Autosuggest will call this function every time suggestions are updated
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value, this.state.data)
    });
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({ suggestions: [] });
  };

  onChange = (event, { newValue }) => {
    this.setState({ value: newValue });
  };

  // render functions
  // renders individual suggestions in autosuggest search section
  renderSuggestion = suggestion => {
    // check if no suggestion available and return so that renderSuggestionsContainer function is still being called (gets deactivated otherwise)
    if (suggestion.isEmpty) {
      return null;
    }
    return (
      <ProfileLink to={`/profile/${suggestion._id}`}>
        <SuggestionBox orgType={suggestion.category}>
          <InnerDivSuggestions>
            <SymbolDiv>
              {SVGCreator("mobile-search-icon")}
              {SVGCreator(`${organizationIcons[suggestion.category].symbol}`)}
            </SymbolDiv>
            <OrganisationDetailsDiv>
              <h3>{suggestion.name}</h3>
              <ReviewDetailsDiv>
                {StarRateCreator(suggestion)}
                <p>{suggestion.totalReviews} reviews</p>
              </ReviewDetailsDiv>
            </OrganisationDetailsDiv>
            <ArrowDiv>
              {SVGCreator(`${organizationIcons[suggestion.category].arrow}`)}
            </ArrowDiv>
          </InnerDivSuggestions>
        </SuggestionBox>
      </ProfileLink>
    );
  };
  // renders all elements and the add item footer
  renderSuggestionsContainer = ({ containerProps, children, query }) => {
    if (query && query.length > 0) {
      return (
        <div {...containerProps}>
          {children}
          <div className="my-suggestions-container-footer" />

          <AddProfileLink
            to={{ pathname: `${ADD_PROFILE_URL}`, state: { name: `${query}` } }}
          >
            <AddItemBox>
              <InnerDivSuggestions>
                <SymbolDiv>{SVGCreator("add-item-icon")}</SymbolDiv>
                <AddItemDetails>
                  <h3>Add {query}</h3>
                </AddItemDetails>
              </InnerDivSuggestions>
            </AddItemBox>
          </AddProfileLink>
        </div>
      );
    }
    return <div {...containerProps}>{children}</div>;
  };
  // renders last viewed organization section
  renderLastViewed = (org, key) => (
    <ProfileLink key={key} to={`/profile/${org._id}`}>
      <ReviewsFrame orgType={org.category}>
        <InnerDivLastReviews orgType={org.category}>
          <SymbolDiv>
            {SVGCreator(`${organizationIcons[org.category].symbol}`)}
          </SymbolDiv>
          <OrganisationDetailsDiv>
            <h3>{org.name}</h3>
            <ReviewDetailsDiv>
              {StarRateCreator(org)}
              <p>{org.totalReviews} reviews</p>
            </ReviewDetailsDiv>
          </OrganisationDetailsDiv>
          <ArrowDiv>
            {SVGCreator(`${organizationIcons[org.category].arrow}`)}
          </ArrowDiv>
        </InnerDivLastReviews>
      </ReviewsFrame>
    </ProfileLink>
  );

  render() {
    const { isLoading, value, suggestions, data } = this.state;
    const inputProps = {
      placeholder: "🔍 start typing...",
      value,
      onChange: this.onChange
    };
    if (!isLoading) return <p data-testid="loading">loading...</p>;

    return (
      <SearchWrapper data-testid="searchwrapper">
        <HeadlineDiv>
          <h2>Welcome to earwig.</h2> <h2>Try searching for…</h2>
        </HeadlineDiv>
        <SearchLegendDiv>
          <RowDiv>
            <ItemDiv>
              {SVGCreator("agency-icon", "40px", "70px")}
              <LegendTitle orgType="agency">Agencies</LegendTitle>
            </ItemDiv>
            <ItemDiv>
              {SVGCreator("payroll-icon", "40px", "70px")}
              <LegendTitle orgType="payroll">Payrolls</LegendTitle>
            </ItemDiv>
          </RowDiv>
          <RowDiv>
            <ItemDiv>
              {SVGCreator("worksite-icon", "40px", "70px")}
              <LegendTitle orgType="worksite">Worksites</LegendTitle>
            </ItemDiv>
            <ItemDiv>
              {SVGCreator("company-icon", "40px", "70px")}
              <LegendTitle orgType="company">Companies</LegendTitle>
            </ItemDiv>
          </RowDiv>
        </SearchLegendDiv>
        <AutosuggestWrapper>
          <Autosuggest
            suggestions={suggestions}
            onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
            onSuggestionsClearRequested={this.onSuggestionsClearRequested}
            shouldRenderSuggestions={() => true}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={this.renderSuggestion}
            inputProps={inputProps}
            renderSuggestionsContainer={this.renderSuggestionsContainer}
          />
        </AutosuggestWrapper>
        <HeadlineDiv>
          <p>Or find out what's happening at...</p>
        </HeadlineDiv>
        <ReviewsContainer>
          {data
            .sort(SortArrayNewest)
            .map((org, index) =>
              index < 5 ? this.renderLastViewed(org, index) : ""
            )}
        </ReviewsContainer>
      </SearchWrapper>
    );
  }
}
