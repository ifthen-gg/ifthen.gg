import React from "react";

function AddIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="31.5"
      height="31.5"
      viewBox="0 0 31.5 31.5"
      stroke="currentColor"
      {...props}
    >
      <g transform="translate(-468.911 158.25)">
        <g transform="translate(469.661 -157.5)">
          <line
            y2="30"
            transform="translate(15)"
            fill="none"
            strokeLinecap="round"
            strokeWidth="1.5"
          />
          <line
            x2="30"
            transform="translate(0 15)"
            fill="none"
            strokeLinecap="round"
            strokeWidth="1.5"
          />
        </g>
      </g>
    </svg>
  );
}

export default AddIcon;
