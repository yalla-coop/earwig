import React from "react";

const JobBoard = props => (
  <svg
    viewBox="-40 0 512 512"
    xmlns="http://www.w3.org/2000/svg"
    height={props.height}
    width={props.width}
    {...props}
  >
    <path
      d="M380.559 206.5v136.02H52.426V206.5H0V512h432.984V206.5zM417.984 497H15V387.625h192.242v-15H15V221.5h22.426v136.02h358.133V221.5h22.425zm0 0"
      fill={props.color || "currentColor"}
    />
    <path
      d="M307.352 243.855h60.707v15h-60.707zm0 0M64.926 221.64h39.554v15H64.926zm0 0M64.926 243.855h39.554v15H64.926zm0 0"
      fill={props.color || "currentColor"}
    />
    <path
      d="M153.137 316.273h42.238V329.5h57.238v-13.227h42.239v-79.632h73.207v-15h-73.207v-12.504h-15v92.136h-27.239v-45.632h-15V314.5h-27.238v-58.86h-15v45.633h-27.238v-45.632h-15v28.879H131.98V156.594l34.59-34.258h36.485v-15h-32.262V15h109.059v102.922l38.437 38.816v52.399h15v-58.57l-38.437-38.817V0H155.793v111.898l-38.813 38.438V299.52h36.157zm0 0M392.984 400.047h15v15h-15zm0 0M392.984 425.047h15v62.43h-15zm0 0M392.984 375.047h15v15h-15zm0 0"
      fill={props.color || "currentColor"}
    />
    <path
      d="M254.852 67.332h15v15h-15zm0 0M254.852 128.203l40.609 41.012 10.656-10.555-36.265-36.625V92.332h-15zm0 0M254.852 42.332h15v15h-15zm0 0"
      fill={props.color || "currentColor"}
    />
  </svg>
);

export default JobBoard;
