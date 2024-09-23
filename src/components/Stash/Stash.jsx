import React from "react";
import styles from "./Stash.module.css";
import StashFlikar from "./StashFlikar";
import StashSearch from "./StashSearch";
import StashBtn from "./StashBtn";
import YarnList from "./YarnList";

const Stash = () => {
  return (
    <div>
      <StashFlikar />
      <div className={styles.stashContainer}>
        <StashSearch />
        <StashBtn />
        <YarnList />
      </div>
    </div>
  );
};
export default Stash;
