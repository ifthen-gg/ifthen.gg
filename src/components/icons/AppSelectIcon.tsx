import React from "react";

function AppSelectIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26.456"
      height="26.456"
      viewBox="0 0 26.456 26.456"
      {...props}
    >
      <path
        d="M6.75,13.364h6.614V6.75H6.75Zm9.921,19.842h6.614V26.592H16.671Zm-9.921,0h6.614V26.592H6.75Zm0-9.921h6.614V16.671H6.75Zm9.921,0h6.614V16.671H16.671ZM26.592,6.75v6.614h6.614V6.75Zm-9.921,6.614h6.614V6.75H16.671Zm9.921,9.921h6.614V16.671H26.592Zm0,9.921h6.614V26.592H26.592Z"
        transform="translate(-6.75 -6.75)"
      />
    </svg>
  );
}

export default AppSelectIcon;
