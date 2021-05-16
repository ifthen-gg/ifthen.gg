import React from "react";

function SearchIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17.999"
      height="18.002"
      viewBox="0 0 17.999 18.002"
      fill="var(--secondary-background-color)"
      {...props}
    >
      <path d="M17.754,15.564l-3.505-3.505a.843.843,0,0,0-.6-.246h-.573a7.309,7.309,0,1,0-1.266,1.266v.573a.843.843,0,0,0,.246.6l3.505,3.505a.84.84,0,0,0,1.192,0l.995-.995a.848.848,0,0,0,0-1.2ZM7.312,11.812a4.5,4.5,0,1,1,4.5-4.5A4.5,4.5,0,0,1,7.312,11.812Z" />
    </svg>
  );
}

export default SearchIcon;
