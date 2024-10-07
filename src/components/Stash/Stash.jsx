import React from "react";
import styles from "./Stash.module.css";
import StashSearch from "./StashSearch";
import StashBtn from "./StashBtn";
// import StashList from "./StashList";
// import yarnData from "./yarndata.json";
// import needleData from "./needleData.json";
// import accesoryData from "./accesoryData.json";
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
}) => {
  // const stashList = [...yarnData, ...needleData, ...accesoryData];

  return (
    <div>
      <div className={`${styles.tabBtnContainer} ${tabBtnContainerclassName}`}>
        <StashTab
          className={`${styles.tabBtn} ${btnClassName}`}
          title={title1}
        />
        <StashTab
          className={`${styles.tabBtn} ${btnClassName}`}
          title={title2}
        />
        <StashTab
          className={`${styles.tabBtn} ${btnClassName}`}
          title={title3}
        />
        <StashTab
          className={`${styles.tabBtn} ${btnClassName}`}
          title={title4}
        />
      </div>
      <div className={`${styles.stashContainer} ${stashContainerclassName}`}>
        <div className={styles.stashHead}>
          <StashSearch />
          <StashBtn
            className={`${styles.newProjectBtn} ${newProjectBtnclassName}`}
          />
        </div>
        {/* <StashList stashList={stashList} /> */}
      </div>
    </div>
  );
};
export default Stash;
