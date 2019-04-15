// media queries
// so far we only decided to use 1 breakpoint, 768px (tablet)
const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  mobileXL: "680px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px"
};

export const breakpoints = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  mobileXL: `(min-width: ${size.mobileXL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`
};

// Organization colors
export const organizations = {
  agency: {
    primary: "#8B51FC",
    secondary: "rgba(139, 81, 252, 0.0964543)"
  },
  payroll: {
    primary: "#37B6FD",
    secondary: "rgba(55, 182, 253, .1)"
  },
  worksite: {
    primary: "#FFA400",
    secondary: "rgba(255, 164, 0, .1)"
  },
  company: {
    primary: "#1C0F13",
    secondary: "rgba(27, 14, 18, 0.1)"
  }
};

// general colors
export const colors = {
  red: "#F15025",
  green: "#04E762",
  white: "#FFFFFF",
  gray1: "#818181", // heading underline
  gray2: "#DBD5DD", //section border
  profileFontColor: "#4A4A4A",
  inputBorder: "#979797",
  purpleLinks: "#8B51FC",
  lightGray: "#9B9B9B"
};

// shadows
export const shadows = {
  buttonShadow: "0px 4px 13px rgba(173, 145, 183, 0.273438)",
  activeButtonShadow: "0px 1px 7px rgba(173, 145, 183, 0.273438)",
  searchBoxShadow: "0px 2px 4px rgba(0, 0, 0, 0.5)",
  autocompleteSuggestionShadow: "0px 1px 2px rgba(0, 0, 0, 0)"
};

// gradient colors
export const gradient = {
  earwig: "linear-gradient(100.91deg, #BB51FC 41.92%, #37B6FD 71.11%)",
  fade:
    "linear-gradient(96.06deg, #BB51FC 18.26%, #37B6FD 35.62%, rgba(55, 182, 253, 0.353591) 50.96%, rgba(55, 182, 253, 0) 68.85%)",
  blackFade:
    "linear-gradient(96.06deg, #2A1E22 18.26%, rgba(42, 30, 34, 0) 68.85%)",
  multiFade:
    "linear-gradient(95.7deg, #BB51FC -0.49%, #37B6FD 16.44%, #FFA400 32.65%, #2A1E22 48.14%, rgba(42, 30, 34, 0) 68.67%)"
};

// icons

export const organizationIcons = {
  agency: {
    symbol: "agency-icon",
    arrow: "agency-arrow"
  },
  payroll: {
    symbol: "payroll-icon",
    arrow: "payroll-arrow"
  },
  worksite: {
    symbol: "worksite-icon",
    arrow: "worksite-arrow"
  },
  company: {
    symbol: "company-icon",
    arrow: "company-arrow"
  }
};

//  font families to be added
