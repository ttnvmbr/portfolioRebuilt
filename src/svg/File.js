import * as React from "react";

function File(props) {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 331 257"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.9 81v16.105H2v157.558h210.06V97.105H65.406V81H16.9v0z"
        fill="#ECE2D0"
        stroke="#221D23"
        strokeWidth={3.75}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fill={props.color}
        d="M106.031 220.725L65.998 53.682 290.003-.002l40.033 167.043z"
      />
      <path
        d="M269.976 121H59.916L2 254.855h210.06L269.976 121z"
        fill="#ECE2D0"
        stroke="#221D23"
        strokeWidth={3.608}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default File;
