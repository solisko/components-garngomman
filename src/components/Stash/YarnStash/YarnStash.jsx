import React, { useState } from "react";
import yarnData from "../yarndata.json";
import styles from "../Stash.module.css";
import StashTab from "../StashTab";
import StashSearch from "../StashSearch";
import StashBtn from "../StashBtn";
import YarnList from "./YarnList";

const YarnStash = () => {
  const [yarnList, setYarnList] = useState(yarnData);

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
        <YarnList yarnList={yarnList} />
      </div>
    </div>
  );
};
export default YarnStash;
