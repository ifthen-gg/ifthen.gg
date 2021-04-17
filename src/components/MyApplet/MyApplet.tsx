import React from "react";
import styles from "./MyApplet.module.css";
import classNames from "classnames";

export type MyAppletProps = {
  active: boolean;
  color: string;
  text: string;
  onActiveChange: (active: boolean) => void;
};

function MyApplet({
  active,
  color,
  text,
  onActiveChange,
}: MyAppletProps): JSX.Element {
  return (
    <div
      className={styles.container}
      style={
        active
          ? {
              backgroundColor: color,
            }
          : {}
      }
    >
      {text}{" "}
      <label
        className={classNames(styles.switch, {
          [styles.active]: active,
        })}
      >
        <div
          style={{
            color,
          }}
        />
        <input
          type="checkbox"
          checked={active}
          onChange={(event) => onActiveChange(event.target.checked)}
        />
      </label>
    </div>
  );
}

export default MyApplet;
