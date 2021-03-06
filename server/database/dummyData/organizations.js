const Organization = require("../models/Organization");

module.exports = async () => {
  const organizations = [
    // companies
    {
      name: "A A C Mechanical & Electrical",
      category: "company",
      phoneNumber: "07911123456",
      email: "hello@aac.uk.net",
      websiteURL: "https://www.aac.uk.net/",
      lastViewed: Date.now(),
    },
    {
      name: "Abbey Builders",
      category: "company",
      phoneNumber: "07911654321",
      email: "hello@abbey-builders.com",
      websiteURL: "https://www.abbey-builders.com/",
      lastViewed: "2019-04-2",
    },
    // agecies
    {
      name: "Aspire Recruitment",
      category: "agency",
      phoneNumber: "+441612454942",
      email: "info@aspirerecruitment.org.uk",
      websiteURL: "http://aspirerecruitment.org.uk/",
      lastViewed: "2019-04-4",
    },
    {
      name: "Champion Recruitment",
      category: "agency",
      phoneNumber: "+441235844001",
      email: "abingdon@champion.co.uk",
      websiteURL: "http://www.champion.co.uk/",
      lastViewed: "2019-06-2",
    },
    // payrolls
    {
      name: "Advanced Payroll Services",
      category: "payroll",
      phoneNumber: "+441733895576",
      email: "admin@advancedpayroll.org",
      websiteURL: "http://www.advancedpayroll.org/",
      lastViewed: "2019-03-1",
    },
    {
      name: "Liberty Bishop",
      category: "payroll",
      phoneNumber: "+441582461444",
      email: "info@libertybishop.co.uk",
      websiteURL: "https://www.libertybishop.co.uk/",
      lastViewed: "2019-02-2",
    },
    // worksites
    {
      name: "Bournemouth University",
      category: "worksite",
      phoneNumber: "+441582461422",
      email: "info@Bournemouth.co.uk",
      websiteURL: "https://www.Bournemouth.co.uk/",
      contractor: {
        name: "MACE",
        logo: "contractors/contractor1.png",
      },
      loacation: {
        lat: 51.5074,
        long: 0.1278,
      },
      lastViewed: "2019-01-2",
    },
    {
      name: "Cardiff University",
      category: "worksite",
      phoneNumber: "+441582461411",
      websiteURL: "https://www.Cardiff.co.uk/",
      contractor: {
        name: "OHAW",
        logo: "contractors/contractor2.png",
      },
      loacation: {
        lat: 51.5274,
        long: 0.1368,
      },
    },
  ];
  return Organization.create(organizations);
};
