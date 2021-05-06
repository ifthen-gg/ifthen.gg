import React from "react";
import styles from "./App.module.css";
import AppBar from "./components/AppBar/AppBar";
import Sidebar from "./components/Sidebar/Sidebar";

function App(): JSX.Element {
  return (
    <>
      <AppBar />
      <div className={styles.app}>
        <Sidebar activeLink="home" />
        <h1>ifthen.gg</h1>
      </div>
    </>
  );
}

export default App;
