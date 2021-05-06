import React from "react";

function CloseIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="currentColor"
      {...props}
    >
      <path
        d="M10.146,10.146a.5.5,0,0,1,.707,0L15,14.293l4.146-4.146a.5.5,0,0,1,.707.707L15.707,15l4.146,4.146a.5.5,0,0,1-.707.707L15,15.707l-4.146,4.146a.5.5,0,0,1-.707-.707L14.293,15l-4.146-4.146A.5.5,0,0,1,10.146,10.146Z"
        transform="translate(-10 -10)"
      />
    </svg>
  );
}

export default CloseIcon;
