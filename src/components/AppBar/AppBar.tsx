import React from "react";
import styles from "./AppBar.module.css";
import RainbowKraken from "../icons/RainbowKraken";
import MinimizeIcon from "../icons/MinimizeIcon";
import CloseIcon from "../icons/CloseIcon";

export type AppBarProps = {
  inGame: boolean;
};

function AppBar({ inGame }: AppBarProps): JSX.Element {
  return (
    <header className={styles.appbar}>
      <svg
        className={styles.branding__background}
        viewBox="0 0 200 48"
        xmlns="http://www.w3.org/2000/svg"
        fill="var(--secondary-background-color)"
      >
        <path d="M0 0H200V30H200L183 48H0V0Z"></path>
      </svg>
      <h1 className={styles.branding}>
        <RainbowKraken />
        IFTHEN.GG
      </h1>

      <div className={styles.toolbar}>
        <MinimizeIcon />
        <CloseIcon />
      </div>
    </header>
  );
}

export default AppBar;
