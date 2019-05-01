import React, { Component } from "react";
import axios from "axios";

import { API_SEARCH_URL } from "../../../apiUrls";

import AutosuggestComponent from "./AutoSuggest";

// UI helper functions
import { SVGCreator, StarRateCreator, SortArrayNewest } from "../../../helpers";

// styles
import {
  HeadlineDiv,
  RowDiv,
  ItemDiv,
  SearchLegendDiv,
  SymbolDiv,
  OrganisationDetailsDiv,
  ReviewDetailsDiv,
  InnerDivLastReviews,
  ArrowDiv,
  SearchWrapper,
  LegendTitle,
  ReviewsFrame,
  ProfileLink,
  ReviewsContainer,
  FlexContainer
} from "./Search.style";

import { organizationIcons } from "./../../../theme";

export const axiosCall = async () => {
  const response = await axios.get(API_SEARCH_URL);
  return response;
};

export default class Search extends Component {
  state = {
    isLoading: false,
    data: null,
    showOtherSections: true
  };

  componentDidMount() {
    axiosCall().then(organizations => {
      this.setState({
        data: organizations.data,
        isLoading: true
      });
    });
    document.addEventListener("mousedown", this.handleClickOutside);
  }
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }
  // renders last viewed organization section
  renderLastViewed = (org, key) => (
    <ProfileLink key={key} href={`/profile/${org._id}`}>
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

  // functions to detect if user clicks outside search box
  // if clicked inside => don't show other sections
  setSearchBoxRef = node => {
    this.searchBoxRef = node;
  };
  handleClickOutside = event => {
    if (this.searchBoxRef && !this.searchBoxRef.contains(event.target)) {
      this.setState({ showOtherSections: true, boxClicked: false });
    } else {
      this.setState({ showOtherSections: false });
    }
  };

  render() {
    const { isLoading, data, showOtherSections } = this.state;
    const { isMobile } = this.props;
    if (!isLoading) return <p data-testid="loading">loading...</p>;

    return (
      <SearchWrapper data-testid="searchwrapper">
        <HeadlineDiv>
          <h2>Welcome to earwig.</h2> <h2>Try searching for…</h2>
        </HeadlineDiv>
        {showOtherSections && (
          <FlexContainer>
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
          </FlexContainer>
        )}
        <FlexContainer ref={this.setSearchBoxRef}>
          <AutosuggestComponent
            height="4.5rem"
            width="80%"
            data={data}
            isMobile={isMobile}
            placeholderText="start typing..."
          />
        </FlexContainer>
        {showOtherSections && (
          <FlexContainer>
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
          </FlexContainer>
        )}
      </SearchWrapper>
    );
  }
}
