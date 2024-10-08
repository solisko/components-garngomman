import React from "react";
import styles from "./Stash.module.css";
import StashSearch from "./StashSearch";
import StashBtn from "./StashBtn";

const Stash = ({ newProjectBtnclassName, stashContainerclassName }) => {
  return (
    <div className={`${styles.stashContainer} ${stashContainerclassName}`}>
      <div className={styles.stashHead}>
        <StashSearch />
        <StashBtn
          className={`${styles.newProjectBtn} ${newProjectBtnclassName}`}
        />
      </div>
    </div>
  );
};
export default Stash;
