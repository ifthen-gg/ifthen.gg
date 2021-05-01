import React from "react";

function MinimizeIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="1"
      viewBox="0 0 10 1"
      fill="currentColor"
      {...props}
    >
      <path d="M 0 0 H 10 V 1 H 0 V 0" />
    </svg>
  );
}

export default MinimizeIcon;
