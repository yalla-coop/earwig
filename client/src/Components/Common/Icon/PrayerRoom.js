import React from "react";

const PrayerRoom = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 56.864 56.864"
    height={props.height}
    width={props.width}
    {...props}
  >
    <g fill={props.color || "currentColor"}>
      <circle
        cx="35.204"
        cy="7.093"
        r="7.093"
        fill={props.color || "currentColor"}
      />
      <path
        d="M47.824 25.536a3.359 3.359 0 0 0-4.554-1.362l-4.606 2.484a81.101 81.101 0 0 1-1.637-3.068c-.601-1.168-2.967-5.958-4.01-7.137-2.107-2.383-6.625-2.73-8.743.017-4.834 6.269-9.049 14.271-8.313 24.811 0 0 .055 1.799 2.237 1.799h.109l2.28 5.918-8.016-.012h-.006a3.928 3.928 0 0 0-.005 7.857l13.748.021h.006a3.932 3.932 0 0 0 3.667-5.342l-3.275-8.499c1.903-.157 1.514-1.312 1.461-1.963-.856-5.629.326-8.585 3.439-13.319a58.35 58.35 0 0 0 2.925 5.047c.982 1.517 2.2 2.385 4.784 1.154l7.147-3.852a3.366 3.366 0 0 0 1.362-4.554z"
        fill={props.color || "currentColor"}
      />
    </g>
  </svg>
);

export default PrayerRoom;
