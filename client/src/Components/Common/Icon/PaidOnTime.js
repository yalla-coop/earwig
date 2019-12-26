import React from "react";

const PaidOnTime = props => (
  <svg
    height={props.height}
    width={props.width}
    viewBox="0 0 45 45"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g opacity="0.503581">
      <path
        d="M43.7345 32.4786C43.6369 32.2561 43.588 32.0892 43.4904 31.9224C43.4416 31.8111 43.3439 31.6443 43.2463 31.4218C41.928 28.4181 38.8032 27.9731 36.6549 28.3625C34.0183 28.8075 31.1377 28.9744 28.7941 30.643C28.3058 30.9768 27.7688 31.3661 27.3293 31.8111C26.8899 32.2561 26.6458 32.9236 26.1575 33.3686C25.2299 34.1473 23.521 33.6467 22.398 33.6467C20.8844 33.6467 19.4197 33.5354 17.9061 33.313C16.5878 33.0905 15.1719 32.7011 14.5372 34.2029C13.3654 37.0953 16.6855 37.874 18.5897 38.4859C19.7126 38.8753 20.6891 39.5427 21.9586 39.654C23.4233 39.8209 24.8393 39.8209 26.2064 40.2658C27.1829 40.5996 27.9641 41.1002 28.9894 41.3227C29.1359 41.3783 29.4288 41.4339 29.7218 41.4895C29.5753 41.6564 29.4288 41.8233 29.2823 41.9902C29.087 41.9345 28.9406 41.9345 28.8917 41.8789C28.2082 41.712 27.6223 41.4895 27.0852 41.2114C26.7434 41.0446 26.4017 40.9333 26.0599 40.8221C25.1322 40.4883 24.1069 40.4327 23.0816 40.3215C22.691 40.2658 22.3004 40.2658 21.9098 40.2102C21.0309 40.099 20.2985 39.7652 19.5662 39.4315C19.1756 39.2646 18.8338 39.0978 18.4432 38.9865C18.2967 38.9309 18.1014 38.8753 17.9061 38.8196C16.4414 38.319 14.586 37.7072 13.9513 36.261C13.6583 35.5935 13.7072 34.8148 14.0489 33.9248C14.4395 32.9236 15.1719 32.4786 16.2461 32.4786C16.7343 32.4786 17.2226 32.5899 17.7108 32.6455L17.9549 32.7011C19.322 32.9236 20.6891 33.0348 22.3492 33.0348C22.691 33.0348 23.0327 33.0905 23.4233 33.0905C23.8139 33.1461 24.2045 33.2017 24.5951 33.2017C25.181 33.2017 25.5716 33.0905 25.8158 32.868C26.0111 32.7011 26.2064 32.423 26.3528 32.1449C26.5481 31.8668 26.6946 31.5886 26.9387 31.3661C27.3293 30.9768 27.8176 30.643 28.257 30.3093C26.4017 29.8643 24.351 29.8643 22.4468 29.9756C21.3727 30.0312 19.9568 29.4193 18.8826 29.03C17.6132 28.585 16.3925 27.9731 15.1231 27.4725C13.9513 27.0275 12.8283 26.4157 11.7053 26.082C11.1194 25.9151 10.4847 25.5813 9.80118 25.7482C9.2641 25.8595 8.77585 26.5826 8.23878 26.5826C7.75053 26.5826 7.1158 25.8595 6.67638 25.6926C6.1393 25.4145 5.45576 25.1364 4.86986 25.0251C4.13748 24.9139 3.69806 25.192 3.06333 25.4701C2.42861 25.7482 1.98918 25.5257 1.30564 25.6926C0.0850118 25.9151 -0.403238 27.3613 0.377961 28.4181C1.06151 29.3081 1.64741 30.3649 2.52626 31.088C4.57691 32.7011 6.82285 34.0361 8.92233 35.5379C11.1194 37.1509 13.1701 38.9309 15.3184 40.6552C16.4414 41.5452 17.7108 42.1014 18.8826 42.8801C20.0056 43.6032 21.2262 44.4376 22.4957 44.7713C25.181 45.55 28.0129 44.1038 30.6494 43.937C31.9677 43.8257 32.993 43.2695 34.2625 42.9914C35.6296 42.7133 36.9478 42.3795 38.2661 42.0458C39.4867 41.7677 40.6585 41.8233 41.7327 41.0446C42.8068 40.2102 43.5392 38.3747 43.7833 36.9285C43.9786 35.4823 44.1739 33.6467 43.7345 32.4786Z"
        fill={props.color || "currentColor"}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.6243 18H27.4855L25.4971 18.0546C25.1272 18.0546 24.7572 18.2732 24.4798 18.5464C23.9249 19.1475 23 20.5683 23 23.2459C23 27.235 25.3584 27.8361 25.3584 27.8361L27.4855 28H27.6705C29.5202 28 31 25.7596 31 22.9727C30.9538 20.2951 29.474 18 27.6243 18ZM25.4046 27.071C25.2197 27.0164 23.6474 26.4699 23.6474 23.3552C23.6474 20.9508 24.4335 19.7486 24.896 19.2568C25.0347 19.0929 25.2659 18.9836 25.4971 18.9836H25.7283C24.896 19.9126 24.341 21.388 24.2948 23.082C24.2948 24.7213 24.8035 26.1967 25.6358 27.1257L25.4046 27.071ZM25.0347 23.082C25.0347 25.377 26.1908 27.235 27.6243 27.235C29.0578 27.235 30.2139 25.3224 30.2139 23.082C30.2139 20.7869 29.0578 18.929 27.6243 18.929C26.1908 18.929 25.0347 20.7869 25.0347 23.082Z"
        fill={props.color || "currentColor"}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.0769 24L21.4142 23.9451C21.4142 23.9451 19 23.3956 19 19.3297C19 16.6374 19.9467 15.2088 20.5148 14.6044C20.7988 14.3297 21.1775 14.1099 21.5562 14.1099L23.5917 14H23.7337C25.2959 14 26.574 15.5385 27 17.5714H26.7633H26.6213H26.2426C25.8639 15.978 24.9172 14.8791 23.7811 14.8791C22.3136 14.8791 21.1302 16.7473 21.1302 19.0549C21.1302 20.3187 21.4615 21.4725 22.0296 22.2418V22.9011V23.1209C22.0296 23.4505 22.0296 23.7253 22.0769 24ZM21.6036 14.9341C21.3669 14.9341 21.1302 15.044 20.9882 15.2088C20.5148 15.7582 19.7101 16.967 19.7574 19.3846C19.7574 22.5165 21.3669 23.0659 21.5562 23.1209H21.7929C20.9408 22.1868 20.3728 20.7033 20.3728 19.0549C20.3728 17.3516 20.9408 15.8681 21.7929 14.9341H21.6036Z"
        fill={props.color || "currentColor"}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32 5C32 7.75862 29.9828 10 27.5 10C25.0172 10 23 7.75862 23 5C23 2.24138 25.0172 0 27.5 0C29.9828 0 32 2.24138 32 5ZM31.1724 5.05747C31.1724 2.81609 29.5172 0.977012 27.5 0.977012C25.4828 0.977012 23.8276 2.75862 23.8276 5.05747C23.8276 7.29885 25.4828 9.13793 27.5 9.13793C29.5172 9.13793 31.1724 7.29885 31.1724 5.05747Z"
        fill={props.color || "currentColor"}
      />
    </g>
  </svg>
);

export default PaidOnTime;
