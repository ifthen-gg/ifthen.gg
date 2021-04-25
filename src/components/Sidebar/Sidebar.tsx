import React from "react";
import AddIcon from "../icons/AddIcon";
import HomeIcon from "../icons/HomeIcon";
import SettingsIcon from "../icons/SettingsIcon";
import styles from "./Sidebar.module.css";
import classNames from "classnames";
import ArrowIcon from "../icons/ArrowIcon";

export type SidebarProps = {
  activeLink: "home" | "add";
  showSettings?: boolean;
};

const navLinks: {
  name: string;
  href: string;
  Icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
}[] = [
  {
    name: "home",
    href: "/",
    Icon: HomeIcon,
  },
  {
    name: "add",
    href: "/new",
    Icon: AddIcon,
  },
];

function Sidebar({ activeLink, showSettings }: SidebarProps): JSX.Element {
  return (
    <aside className={styles.sidebar}>
      <nav>
        {navLinks.map(({ name, href, Icon }) => (
          <a
            key={name}
            className={classNames(styles.sidebar__link, {
              [styles["sidebar__link--active"]]: activeLink === name,
            })}
            href={href}
          >
            <Icon />
          </a>
        ))}
      </nav>
      <details className={styles.settings} open={showSettings}>
        <summary className={styles.settings__summary}>
          <SettingsIcon className={styles.settings__icon} />
          <ArrowIcon className={styles.settings__arrow} />
        </summary>
        <section className={styles.settings__content}>Settings</section>
      </details>
    </aside>
  );
}

export default Sidebar;
