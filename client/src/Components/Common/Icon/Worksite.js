import React from "react";

const Worksite = props => (
  <svg
    height={props.height}
    width={props.width}
    {...props}
    viewBox="0 0 59 59"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <rect width="59" height="59" fill="url(#pattern0)" />
    <mask
      id="mask0"
      mask-type="alpha"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="59"
      height="59"
    >
      <rect width="59" height="59" fill="url(#pattern1)" />
    </mask>
    <g mask="url(#mask0)">
      <rect width="59" height="59" fill="#FFA400" />
    </g>
    <defs>
      <pattern
        id="pattern0"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use xlinkHref="#image0" transform="scale(0.00195312)" />
      </pattern>
      <pattern
        id="pattern1"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use xlinkHref="#image0" transform="scale(0.00195312)" />
      </pattern>
      <image
        id="image0"
        width="512"
        height="512"
        xlinkHref="data:image/png;base64,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IgJhAQEQprKQQD8BAdBvpk5EICxwY3wwvLbWwjeMb6jV0LluHh9PnXt7KW98aPzhUlrV5xQCN8dbp9jGHhcEfvTC20t587NLaVSf0wj4EmAaR7sQWKSAAFjk2DRNYBoBATCNo10ILFJAACxybJomMI2AAJjG0S4EFikgABY5Nk0TmEZAAEzjaBcCixQQAIscm6YJTCMgAKZxtAuBRQoIgEWOTdMEphEQANM42oXAIgUEwCLHpmkC0wgIgGkc7UJgkQICYJFj0zSBaQQEwDSOdiGwSAEBsMixaZrANAICYBpHuxBYpIAAWOTYNE1gGgEBMI2jXQgsUkAALHJsmiYwjYAAmMbRLgQWKSAAFjk2TROYRkAATONoFwKLFBAAixybpglMIyAApnG0C4FFCgiARY5N0wSmERAA0zjahcAiBQTAIsemaQLTCNwcH5lmI7u0EPhEi1M4BAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECguMD/AS3Hg24J6BdDAAAAAElFTkSuQmCC"
      />
    </defs>
  </svg>
);

export default Worksite;