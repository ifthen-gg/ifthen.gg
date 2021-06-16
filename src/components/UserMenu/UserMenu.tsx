import React from "react";
import MyApplet from "../MyApplet/MyApplet";

import styles from "./UserMenu.module.css";

export type Applet = {
  active: boolean;
  text: string;
  color: string;
};

export type UserMenuProps = {
  username: string;
  onAppletActiveChange: (text: string, active: boolean) => void;
  applets: Applet[];
};

function UserMenu({
  username,
  onAppletActiveChange,
  applets,
}: UserMenuProps): JSX.Element {
  return (
    <section className={styles.userMenu}>
      <h2>{username}</h2>
      <section>
        <h4 className={styles.appletHeadline}>My Applets</h4>

        <div className={styles.applets}>
          {applets
            ? applets.map((applet) => (
                <MyApplet
                  key={applet.text}
                  active={applet.active}
                  color={applet.color}
                  text={applet.text}
                  onActiveChange={(active) =>
                    onAppletActiveChange(applet.text, active)
                  }
                />
              ))
            : "No Applets found"}
        </div>
      </section>
      <div className={styles.ad}>Video Ad Playing</div>
    </section>
  );
}

export default UserMenu;
