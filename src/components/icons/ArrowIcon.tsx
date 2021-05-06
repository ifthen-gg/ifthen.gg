import React from "react";

function ArrowIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="8"
      height="9"
      viewBox="0 0 8 9"
      fill="currentColor"
      {...props}
    >
      <path d="M4.5,0,9,8H0Z" transform="translate(8) rotate(90)" />
    </svg>
  );
}

export default ArrowIcon;
