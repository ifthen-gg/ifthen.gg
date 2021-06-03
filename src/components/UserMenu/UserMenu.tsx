import React from "react";
import styles from "./UserMenu.module.css";

export type UserMenuProps = {
  username: string;
};

function UserMenu({ username }: UserMenuProps): JSX.Element {
  return <section className={styles.userMenu}>{username}</section>;
}

export default UserMenu;
