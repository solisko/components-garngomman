import React from "react";
import styles from "./Stash.module.css";
import StashSearch from "./StashSearch";
import StashBtn from "./StashBtn";
import StashTab from "./StashTab";

const Stash = ({
  title1,
  title2,
  title3,
  title4,
  btnClassName,
  newProjectBtnclassName,
  stashContainerclassName,
  tabBtnContainerclassName,
  handleClick
}) => {

  return (
    <div>
      <div className={`${styles.tabBtnContainer} ${tabBtnContainerclassName}`}>
        <StashTab
          className={`${styles.tabBtn} ${btnClassName}`}
          title={title1}
          handleClick={{handleClick}}
          />
        <StashTab
          className={`${styles.tabBtn} ${btnClassName}`}
          title={title2}
          handleClick={{handleClick}}
          />
        <StashTab
          className={`${styles.tabBtn} ${btnClassName}`}
          title={title3}
          handleClick={{handleClick}}
          />
        <StashTab
          className={`${styles.tabBtn} ${btnClassName}`}
          title={title4}
          handleClick={{handleClick}}
        />
      </div>
      <div className={`${styles.stashContainer} ${stashContainerclassName}`}>
        <div className={styles.stashHead}>
          <StashSearch />
          <StashBtn
            className={`${styles.newProjectBtn} ${newProjectBtnclassName}`}
          />
        </div>
      </div>
    </div>
  );
};
export default Stash;
