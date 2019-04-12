import React, { Component } from "react";
import SVG from "react-inlinesvg";
import axios from "axios";
import Autosuggest from "react-autosuggest";
import StarRatingComponent from "react-star-rating-component";

import {
  HeadlineDiv,
  RowDiv,
  ItemDiv,
  LegendTitle,
  SearchLegendDiv,
  SearchWrapper,
  SuggestionBox,
  SymbolDiv,
  OrganisationDetailsDiv,
  ReviewDetailsDiv,
  InnerDivLastReviews,
  InnerDivSuggestions,
  ArrowDiv,
  ImgDiv,
  ReviewsFrame,
  ProfileLink
} from "./Search.style";

import { organizationIcons, organizations } from "./../../../theme";

export default class Search extends Component {
  state = {
    loaded: false,
    data: null,
    value: "",
    suggestions: []
  };

  // lifecycle
  componentDidMount() {
    axios.get("/api/search").then(organizations => {
      this.setState({
        data: organizations.data,
        loaded: true
      });
    });
  }

  // functions autosuggest component
  // teach Autosuggest how to calculate suggestions for any given input value.
  getSuggestions = (value, organisationsArray) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
    return inputLength === 0
      ? []
      : organisationsArray.filter(
          orga => orga.name.toLowerCase().slice(0, inputLength) === inputValue
        );
  };

  // When suggestion is clicked, Autosuggest needs to populate the input based on the clicked suggestion.
  // Teach Autosuggest how to calculate the input value for every given suggestion.
  getSuggestionValue = suggestion => suggestion.name;

  // Autosuggest will call this function every time you need to update suggestions.
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: this.getSuggestions(value, this.state.data)
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
  // creates SVGs
  SVGcreator = source => (
    <ImgDiv>
      <SVG src={`/icons/${source}.svg`} alt={`${source}`} />
    </ImgDiv>
  );

  // creates star rating component
  StarRateCreator = entry => (
    <StarRatingComponent
      name="orgaRate"
      editing={false}
      starCount={5}
      value={entry.avgRatings}
      starColor={`${organizations[entry.category].primary}`}
      emptyStarColor={"#D3D3D3"}
    />
  );

  // renders individual suggestions in autosuggest search section
  renderSuggestion = suggestion => (
    <ProfileLink to={`/profile/${suggestion._id}`}>
      <SuggestionBox orgType={suggestion.category}>
        <InnerDivSuggestions>
          <SymbolDiv>
            {this.SVGcreator("mobile-search-icon")}
            {this.SVGcreator(
              `${organizationIcons[suggestion.category].symbol}`
            )}
          </SymbolDiv>
          <OrganisationDetailsDiv>
            <h3>{suggestion.name}</h3>
            <ReviewDetailsDiv>
              {this.StarRateCreator(suggestion)}
              <p>{suggestion.totalReviews} reviews</p>
            </ReviewDetailsDiv>
          </OrganisationDetailsDiv>
          <ArrowDiv>
            {this.SVGcreator(`${organizationIcons[suggestion.category].arrow}`)}
          </ArrowDiv>
        </InnerDivSuggestions>
      </SuggestionBox>
    </ProfileLink>
  );

  // renders last viewed organization section (only slight differences to autocomplete render function so can be refactored in future)
  renderLastViewed = orga => (
    <ProfileLink to={`/profile/${orga._id}`}>
      <ReviewsFrame orgType={orga.category}>
        <InnerDivLastReviews orgType={orga.category}>
          <SymbolDiv>
            {this.SVGcreator(`${organizationIcons[orga.category].symbol}`)}
          </SymbolDiv>
          <OrganisationDetailsDiv>
            <h3>{orga.name}</h3>
            <ReviewDetailsDiv>
              {this.StarRateCreator(orga)}
              <p>{orga.totalReviews} reviews</p>
            </ReviewDetailsDiv>
          </OrganisationDetailsDiv>
          <ArrowDiv>
            {this.SVGcreator(`${organizationIcons[orga.category].arrow}`)}
          </ArrowDiv>
        </InnerDivLastReviews>
      </ReviewsFrame>
    </ProfileLink>
  );

  // sorts reviews by last viewed
  sortLastViewed = (a, b) =>
    a.lastViewed > b.lastViewed ? -1 : b.lastViewed > a.lastViewed ? 1 : 0;

  render() {
    const { loaded, value, suggestions, data } = this.state;
    const inputProps = {
      placeholder: "🔍        start typing...",
      value,
      onChange: this.onChange,
      highlightFirstSuggestion: true
    };
    if (!loaded) return <p>loading...</p>;

    return (
      <SearchWrapper>
        <HeadlineDiv>
          <h2>Welcome to earwig.</h2> <h2>Try searching for…</h2>
        </HeadlineDiv>
        <SearchLegendDiv>
          <RowDiv>
            <ItemDiv>
              {this.SVGcreator("agency-icon")}
              <LegendTitle color="#8B51FC">Agencies</LegendTitle>
            </ItemDiv>
            <ItemDiv>
              {this.SVGcreator("payroll-icon")}
              <LegendTitle color="#37B6FD">Payrolls</LegendTitle>
            </ItemDiv>
          </RowDiv>
          <RowDiv>
            <ItemDiv>
              {this.SVGcreator("worksite-icon")}
              <LegendTitle color="#FFA400">Worksites</LegendTitle>
            </ItemDiv>
            <ItemDiv>
              {this.SVGcreator("company-icon")}
              <LegendTitle color="#1C0F13">Companies</LegendTitle>
            </ItemDiv>
          </RowDiv>
        </SearchLegendDiv>
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={this.getSuggestionValue}
          renderSuggestion={this.renderSuggestion}
          inputProps={inputProps}
          scrollable={true}
        />
        <HeadlineDiv>
          <p>Or find out what's happening at...</p>
        </HeadlineDiv>
        {data
          .sort(this.sortLastViewed)
          .map((orga, index) => (index < 4 ? this.renderLastViewed(orga) : ""))}
      </SearchWrapper>
    );
  }
}
