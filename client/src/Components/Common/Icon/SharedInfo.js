import React from "react";

const SharedInfo = props => (
  <svg
    height={props.height}
    width={props.width}
    viewBox="0 0 45 45"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g opacity="0.502674">
      <path
        d="M31.5 8C32.3284 8 33 7.32843 33 6.5C33 5.67157 32.3284 5 31.5 5C30.6716 5 30 5.67157 30 6.5C30 7.32843 30.6716 8 31.5 8Z"
        fill={props.color || "currentColor"}
      />
      <path
        d="M29.1378 9.72764C29.6888 9.34562 31.0718 8.7463 32.1739 9.11586C33.208 9.5369 33.3553 10.9517 33.1675 11.538C33.1412 12.6218 32.187 15.6682 32.2807 17.1215C32.3886 17.8227 33.6505 17.6818 34 17.4017C34 17.9376 34 17.9376 34 18.2178C33.8521 18.4475 32.3435 19.0084 31.8958 18.9574C30.9102 19.2381 29.7014 18.0649 29.8093 17.3768C29.5946 16.2936 30.9782 11.0417 30.7092 10.6846C30.4677 10.0858 29.3776 10.2766 29.0036 10.5827C28.9808 10.4798 29.071 10.0977 29.1378 9.72764Z"
        fill={props.color || "currentColor"}
      />
      <path
        d="M29.2855 22.7994L32.0371 22.8243C31.6028 24.0442 30.0664 29 30.0664 29C30.0664 29 35.3855 23.2877 36.1409 22.8248C39.4595 22.831 43.6027 23.136 44.579 19.0956C44.8595 16.7361 44.95 11.6099 44.95 11.6099C44.95 11.6099 45.2635 6.13735 44.3202 3.96365C43.0229 0.97598 40.0552 1.00912 37.2759 1.00912C33.1338 1.00912 28.9922 1.00912 24.8501 1.00912C23.4729 1.00912 22.0617 0.891579 20.7841 1.5005C18.2092 2.72819 18 5.14474 18 7.59701"
        stroke={props.color || "currentColor"}
        strokeWidth="1.5"
      />
      <path
        d="M0.014082 43.3798C-0.0829041 41.7089 0.305556 38.2688 1.66439 37.3839C2.78077 36.7942 10.6934 34.7795 11.0334 34.8772C11.1788 33.9924 11.0819 33.353 11.0334 32.0759C9.86849 30.8469 9.38305 29.0772 8.8099 27.3222C7.10181 28.7821 5.40249 21.3116 7.87821 21.9014C7.68424 18.2152 6.76184 14.5782 9.86849 12.1206C13.3151 8.58179 20.6933 10.1054 22.0521 12.1201C23.9454 12.2188 25.3042 15.2661 25.4017 16.0528C25.5962 19.0019 25.1593 20.2795 25.1103 21.8032C28.3629 21.9996 25.2558 28.5857 24.1399 27.4705C23.7344 27.9134 23.023 30.9942 21.6157 31.9281C21.6642 33.5991 21.5672 34.8772 21.5672 34.8772C21.5672 34.8772 30.0107 36.6464 31.2013 37.5803C32.392 38.5137 33.2659 41.0204 32.9259 43.4012C26.2272 46.7708 5.20851 46.9677 0.014082 43.3798Z"
        fill={props.color || "currentColor"}
      />
    </g>
  </svg>
);

export default SharedInfo;
