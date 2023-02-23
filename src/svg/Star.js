import * as React from "react";

function Star() {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 54 54"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        filter="url(#prefix__filter0_d_318_80)"
        clipPath="url(#prefix__clip0_318_80)"
      >
        <path
          d="M26.272 41.997l.595-12.292L9.833 53.472l16.44-11.475zM43.207 54l-16.34-24.295-.595 12.292L43.207 54zm0 0l-5.35-19.905-10.99-4.39L43.207 54zm-33.374-.528l17.034-23.767L15.51 32.91 9.833 53.472zm17.034-23.767L0 20.098l15.51 12.813 11.357-3.206zm0 0l10.99 4.39L54 20.952l-27.133 8.753zm0 0l-6.424-10.311L0 20.098l26.867 9.607zm0 0L54 20.952l-19.746-.826-7.387 9.579zm0 0l7.387-9.58L27.296 0l-.429 29.705zm0 0L27.297 0l-6.854 19.394 6.424 10.31z"
          fill="#A26769"
        />
        <path
          d="M26.867 29.705L27.297 0l-6.854 19.394 6.424 10.31z"
          fill="#582438"
        />
        <path
          d="M26.867 29.705l7.387-9.58L27.296 0l-.429 29.705z"
          fill="#A26769"
        />
        <path
          d="M26.867 29.705L54 20.952l-19.746-.826-7.387 9.579zM26.867 29.705l-6.424-10.311L0 20.098l26.867 9.607z"
          fill="#441A2A"
        />
        <path
          d="M26.867 29.704l10.99 4.391L54 20.952l-27.133 8.752zM26.867 29.705L0 20.098l15.51 12.813 11.357-3.206z"
          fill="#BE887A"
        />
        <path
          d="M9.833 53.472l17.034-23.767L15.51 32.91 9.833 53.472z"
          fill="#582438"
        />
        <path
          d="M43.207 54l-5.35-19.905-10.99-4.39L43.207 54z"
          fill="#A26769"
        />
        <path
          d="M43.207 54l-16.34-24.295-.595 12.292L43.207 54z"
          fill="#441A2A"
        />
        <path
          d="M26.272 41.997l.595-12.292L9.833 53.472l16.44-11.475z"
          fill="#BE887A"
        />
      </g>
      <defs>
        <clipPath id="prefix__clip0_318_80">
          <path fill="#fff" d="M0 0h54v54H0z" />
        </clipPath>
        <filter
          id="prefix__filter0_d_318_80"
          x={-4}
          y={0}
          width={62}
          height={62}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={2} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_318_80"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_318_80"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default Star;
