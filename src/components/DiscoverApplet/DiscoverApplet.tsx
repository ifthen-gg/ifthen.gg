import React from "react";
import styles from "./DiscoverApplet.module.css";

export type DiscoverAppletProps = {
  text: string;
  color: string;
  href: string;
};

function DiscoverApplet({
  text,
  color,
  href,
}: DiscoverAppletProps): JSX.Element {
  return (
    <div className={styles.container} style={{ backgroundColor: color }}>
      <p title={text}>{text}</p>
      <a href={href}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="23"
          height="23"
          viewBox="0 0 23 23"
        >
          <g transform="translate(-468.797 158.365)">
            <g transform="translate(470.004 -157.157)">
              <line
                y2="20"
                transform="translate(10.292 0.292)"
                fill="none"
                strokeLinecap="round"
                strokeWidth="3"
              />
              <line
                x2="20"
                transform="translate(0.292 10.292)"
                fill="none"
                strokeLinecap="round"
                strokeWidth="3"
              />
            </g>
          </g>
        </svg>
      </a>
    </div>
  );
}

export default DiscoverApplet;
