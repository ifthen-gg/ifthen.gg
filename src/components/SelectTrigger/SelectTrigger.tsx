import React, { useState } from "react";
import AppSelectionIcon from "../icons/AppSelectIcon";
import SearchIcon from "../icons/SearchIcon";
import styles from "./SelectTrigger.module.css";

export type SelectTriggerProps = { title: string; description: string };

function SelectTrigger({
  title,
  description,
}: SelectTriggerProps): JSX.Element {
  const [search, setSearch] = useState("");
  return (
    <section className={styles.outer}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <AppSelectionIcon />
          <div>
            <h3 className={styles.header__title}>{title}</h3>
            <p className={styles.header__description}>{description}</p>
          </div>
        </header>
        <label className={styles.searchBar}>
          <SearchIcon className={styles.searchBar__icon} />
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            className={styles.searchBar__input}
            type="text"
            placeholder="Search Games or Apps"
          />
        </label>
      </div>
    </section>
  );
}

export default SelectTrigger;
