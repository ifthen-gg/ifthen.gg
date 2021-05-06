import React from "react";
import styles from "./AppBar.module.css";
import RainbowKraken from "../icons/RainbowKraken";
import MinimizeIcon from "../icons/MinimizeIcon";
import CloseIcon from "../icons/CloseIcon";
import classNames from "classnames";

export type AppBarProps = {
  inGame?: boolean;
};

function AppBar({ inGame }: AppBarProps): JSX.Element {
  return (
    <header className={styles.appBar}>
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
        {inGame ? (
          <div className={styles.tip}>
            <span className={styles.tip__hidden}>Show/Hide</span> Ctrl+F2
          </div>
        ) : (
          <button className={styles.toolbar__button}>
            <MinimizeIcon />
          </button>
        )}
        <button
          className={classNames(
            styles.toolbar__button,
            styles["toolbar__button--danger"]
          )}
        >
          <CloseIcon />
        </button>
      </div>
    </header>
  );
}

export default AppBar;
