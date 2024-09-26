import React from "react";
import styles from "../Stash.module.css";
import StashFlikar from "../StashFlikar";
import StashBtn from "../StashBtn";
import StashSearch from "../StashSearch";
import NeedleList from "./NeedleList";

const NeedleStash = () => {
  return (
    <div>
      <StashFlikar />
      <div className={styles.stashContainer}>
        <div className={styles.stashHead}>
          <StashSearch />
          <StashBtn />
        </div>
        <NeedleList />
      </div>
    </div>
  );
};
export default NeedleStash;
