import React, { useState } from "react";
import needleData from "../needleData.json";
import styles from "../Stash.module.css";
import StashFlikar from "../StashFlikar";
import StashBtn from "../StashBtn";
import StashSearch from "../StashSearch";
import NeedleList from "./NeedleList";

const NeedleStash = () => {
  const [needleList, setNeedleList] = useState(needleData);

  return (
    <div>
      <StashFlikar />
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
