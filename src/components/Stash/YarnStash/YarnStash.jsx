import React, { useState } from "react";
import yarnData from "../yarndata.json";
import styles from "../Stash.module.css";
import StashFlikar from "../StashFlikar";
import StashSearch from "../StashSearch";
import StashBtn from "../StashBtn";
import YarnList from "./YarnList";

const YarnStash = () => {
  const [yarnList, setYarnList] = useState(yarnData);

  return (
    <div>
      <StashFlikar />
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
