import React from "react";
import styles from "./Stash.module.css";
import StashFlikar from "./StashFlikar";
import StashSearch from "./StashSearch";
import StashBtn from "./StashBtn";
import StashList from "./StashList";

const Stash = () => {
  return (
    <div>
      <StashFlikar />
      <div className={styles.stashContainer}>
        <StashSearch />
        <StashBtn />
        <StashList />
      </div>
    </div>
  );
};
export default Stash;
