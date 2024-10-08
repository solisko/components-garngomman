import React from "react";
import styles from "./Stash.module.css";
import StashSearch from "./StashSearch";
import StashBtn from "./StashBtn";

const Stash = ({ newProjectBtnclassName, stashContainerclassName }) => {
  return (
    <div className={`${styles.stashContainer} ${stashContainerclassName}`}>
      <StashSearch />
      <StashBtn
        className={`${styles.newProjectBtn} ${newProjectBtnclassName}`}
      />
    </div>
  );
};
export default Stash;
