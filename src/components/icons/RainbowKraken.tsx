import React from "react";

function RainbowKraken(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28.481"
      height="32"
      viewBox="0 0 28.481 32"
      {...props}
    >
      <defs>
        <linearGradient
          id="linear-gradient"
          x1="0.5"
          x2="0.5"
          y2="1"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0" stopColor="#ffd33d" />
          <stop offset="0.222" stopColor="#fb8532" />
          <stop offset="0.456" stopColor="#ea4a5a" />
          <stop offset="0.64" stopColor="#8a63d2" />
          <stop offset="0.82" stopColor="#2188ff" />
          <stop offset="1" stopColor="#34d058" />
        </linearGradient>
      </defs>
      <g>
        <g transform="translate(7.08)">
          <path
            d="M158.761,13.181,154.555,1.742a2.712,2.712,0,0,0-5.065,0l-4.206,11.439c-1.684,4.581,1.9,9.076,6.739,9.076S160.441,17.752,158.761,13.181Zm-9.745,5.744A1.425,1.425,0,1,1,150.47,17.5,1.44,1.44,0,0,1,149.016,18.926Zm6.014,0a1.425,1.425,0,1,1,1.455-1.425A1.44,1.44,0,0,1,155.029,18.926Z"
            transform="translate(-144.862 0)"
            fill="url(#linear-gradient)"
          />
        </g>
        <g transform="translate(4.044 6.542)">
          <path
            d="M91.053,110.444a2.638,2.638,0,0,0,1.342,1.617c.175-.859.16-.724,2.5-7.1C91.88,107.728,90.49,108.5,91.053,110.444Z"
            transform="translate(-90.93 -104.96)"
            fill="url(#linear-gradient)"
          />
        </g>
        <g transform="translate(20.466 6.542)">
          <path
            d="M359.449,104.96c2.354,6.4,2.331,6.246,2.5,7.1a2.638,2.638,0,0,0,1.342-1.617C363.861,108.5,362.478,107.736,359.449,104.96Z"
            transform="translate(-359.449 -104.96)"
            fill="url(#linear-gradient)"
          />
        </g>
        <g transform="translate(11.017 23.53)">
          <path
            d="M204.867,377.784v7.393a1.1,1.1,0,0,0,2.2,0v-6.883A9.655,9.655,0,0,1,204.867,377.784Z"
            transform="translate(-204.867 -377.784)"
            fill="url(#linear-gradient)"
          />
        </g>
        <g transform="translate(0 18.771)">
          <path
            d="M35.685,303.609v2.786a1.289,1.289,0,0,1-2.577,0v-3.948a1.088,1.088,0,0,0-1.1-1.077H29.254a1.077,1.077,0,1,0,0,2.154h1.655v2.871a3.489,3.489,0,0,0,6.976,0v-.983A9.373,9.373,0,0,1,35.685,303.609Z"
            transform="translate(-28.154 -301.369)"
            fill="url(#linear-gradient)"
          />
        </g>
        <g transform="translate(15.264 23.53)">
          <path
            d="M273,378.294v6.883a1.1,1.1,0,0,0,2.2,0v-7.393A9.654,9.654,0,0,1,273,378.294Z"
            transform="translate(-272.999 -377.784)"
            fill="url(#linear-gradient)"
          />
        </g>
        <g transform="translate(18.75 18.771)">
          <path
            d="M341.444,301.369h-2.755a1.088,1.088,0,0,0-1.1,1.077v3.948a1.289,1.289,0,0,1-2.577,0v-2.786a9.371,9.371,0,0,1-2.2,1.8v.983a3.489,3.489,0,0,0,6.976,0v-2.871h1.655a1.077,1.077,0,1,0,0-2.154Z"
            transform="translate(-332.813 -301.369)"
            fill="url(#linear-gradient)"
          />
        </g>
      </g>
    </svg>
  );
}

export default RainbowKraken;
