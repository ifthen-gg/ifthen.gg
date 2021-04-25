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
      <path d="M20,19H10v1H20Z" transform="translate(-10 -19)" />
    </svg>
  );
}

export default MinimizeIcon;
