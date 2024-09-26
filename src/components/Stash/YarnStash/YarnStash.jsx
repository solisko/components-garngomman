import React from "react";
import styles from "../Stash.module.css";
import StashFlikar from "../StashFlikar";
import StashSearch from "../StashSearch";
import StashBtn from "../StashBtn";
import YarnList from "./YarnList";

const YarnStash = () => {
  return (
    <div>
      <StashFlikar />
      <div className={styles.stashContainer}>
        <div className={styles.stashHead}>
          <StashSearch />
          <StashBtn />
        </div>
        <YarnList />
      </div>
    </div>
  );
};
export default YarnStash;
