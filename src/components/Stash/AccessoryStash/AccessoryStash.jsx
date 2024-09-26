import React from "react";
import styles from "../Stash.module.css";
import StashFlikar from "../StashFlikar";
import StashSearch from "../StashSearch";
import StashBtn from "../StashBtn";
import AccesoryList from "./AccesoryList";

const AccessoryStash = () => {
  return (
    <div>
      <StashFlikar />
      <div className={styles.stashContainer}>
        <div className={styles.stashHead}>
          <StashSearch />
          <StashBtn />
        </div>
        <AccesoryList />
      </div>
    </div>
  );
};
export default AccessoryStash;
