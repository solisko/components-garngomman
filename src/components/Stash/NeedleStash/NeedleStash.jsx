import React, { useState } from "react";
import needleData from "../needleData.json";
import styles from "../Stash.module.css";
import StashBtn from "../StashBtn";
import StashSearch from "../StashSearch";
import NeedleList from "./NeedleList";
import StashTab from "../StashTab";

const NeedleStash = () => {
  const [needleList, setNeedleList] = useState(needleData);

  return (
    <div>
      <div className={styles.tabBtnContainer}>
        <StashTab title="Tab 1" />
        <StashTab title="Tab 2" />
        <StashTab title="Tab 3" />
        <StashTab title="Tab 4" />
      </div>
      <div className={styles.stashContainer}>
        <div className={styles.stashHead}>
          <StashSearch />
          <StashBtn />
        </div>
        <NeedleList needleList={needleList} />
      </div>
    </div>
  );
};
export default NeedleStash;
