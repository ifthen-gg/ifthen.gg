import React from "react";
import MyApplet from "../MyApplet/MyApplet";

import styles from "./UserMenu.module.css";

export type Applet = {
  active: boolean;
  text: string;
  color: string;
  onActiveChange: (active: boolean) => void;
};

export type UserMenuProps = {
  username: string;
  applets: Applet[];
};

function UserMenu({ username, applets }: UserMenuProps): JSX.Element {
  return (
    <section className={styles.userMenu}>
      <h2>{username}</h2>
      <section>
        <h4 className={styles.appletHeadline}>My Applets</h4>
        <div className={styles.appletsContainer}>
          <div className={styles.applets}>
            {applets
              ? applets.map((applet) => (
                  <MyApplet
                    key={applet.text}
                    active={applet.active}
                    color={applet.color}
                    text={applet.text}
                    onActiveChange={applet.onActiveChange}
                  />
                ))
              : "No Applets found"}
          </div>
        </div>
      </section>
      <div className={styles.ad}>Video Ad Playing</div>
    </section>
  );
}

export default UserMenu;
