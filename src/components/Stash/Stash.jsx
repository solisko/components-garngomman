import React from "react";
import styles from "./Stash.module.css";
import StashSearch from "./StashSearch";
import StashBtn from "./StashBtn";
// import StashList from "./StashList";
// import yarnData from "./yarndata.json";
// import needleData from "./needleData.json";
// import accesoryData from "./accesoryData.json";
import StashTab from "./StashTab";

const Stash = ({ title1, title2, title3, title4, btnClassName }) => {
  // const stashList = [...yarnData, ...needleData, ...accesoryData];

  return (
    <div>
      <div className={styles.tabBtnContainer}>
        <StashTab
          className={`${styles.tabBtn} ${btnClassName}`}
          title={title1}
        />
        <StashTab title={title2} />
        <StashTab title={title3} />
        <StashTab title={title4} />
      </div>
      <div className={styles.stashContainer}>
        <div className={styles.stashHead}>
          <StashSearch />
          <StashBtn />
        </div>
        {/* <StashList stashList={stashList} /> */}
      </div>
    </div>
  );
};
export default Stash;
