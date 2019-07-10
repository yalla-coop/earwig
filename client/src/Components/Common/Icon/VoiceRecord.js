import React from "react";

const VoiceRecord = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={props.height}
    width={props.width}
    viewBox="0 0 450 550"
    {...props}
  >
    <path d="M87.742 204.879c-8.668 0-15.701 7.035-15.701 15.701 0 83.252 63.68 151.883 144.886 159.802v53.471h-86.913c-8.666 0-15.701 7.033-15.701 15.701 0 8.664 7.035 15.701 15.701 15.701h205.231c8.659 0 15.701-7.037 15.701-15.701 0-8.668-7.042-15.701-15.701-15.701h-86.918v-53.471c81.211-7.919 144.889-76.55 144.889-159.802 0-8.666-7.029-15.701-15.701-15.701-8.664 0-15.701 7.035-15.701 15.701 0 71.23-57.955 129.189-129.185 129.189-71.236 0-129.185-57.959-129.185-129.189-.001-8.665-7.028-15.701-15.702-15.701z" fill={props.color || "currentColor"} />
    <path d="M222.014 326.098h22.626c46.014 0 83.311-37.297 83.311-83.306H138.704c0 46.009 37.297 83.306 83.31 83.306zM245.125 0h-22.632c-46.013 0-83.31 37.297-83.31 83.31h189.253C328.436 37.297 291.13 0 245.125 0zM139.183 99.851h188.286v31.4H139.183zM139.864 146.662h188.287v31.4H139.864zM138.485 195.067h188.279v31.4H138.485z" fill={props.color || "currentColor"} />
  </svg>
);

export default VoiceRecord;
