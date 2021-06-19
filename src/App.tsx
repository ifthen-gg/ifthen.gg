import React from "react";
import styles from "./App.module.css";
import AppBar from "./components/AppBar/AppBar";
import Sidebar from "./components/Sidebar/Sidebar";
import UserMenu from "./components/UserMenu/UserMenu";

function App(): JSX.Element {
  return (
    <>
      <AppBar />
      <div className={styles.app}>
        <Sidebar activeLink="home" />
        <h1>ifthen.gg</h1>
        <UserMenu
          username="sirlunchalot619"
          applets={[
            {
              active: false,
              color: "#2D89A1",
              text: "If CPU usage is high, then close Chrome.",
            },
            {
              active: false,
              color: "#2D89A1",
              text: "If CPU usage is high, then close Chrome.",
            },
            {
              active: true,
              color: "#a12d71",
              text: "If League of Legends is started, then start Spotify.",
            },
            {
              active: false,
              color: "#2da146",
              text: "If CPU usage is low, start mining.",
            },
            {
              active: true,
              color: "#2D89A1",
              text: "If CPU usage is high, then close Chrome.",
            },
            {
              active: false,
              color: "#2D89A1",
              text: "If CPU usage is high, then close Chrome.",
            },
          ]}
          onAppletActiveChange={console.log}
        />
      </div>
    </>
  );
}

export default App;
