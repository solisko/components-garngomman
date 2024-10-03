import React from "react";
import { useState } from "react";
import accesoryData from "../accesoryData.json";
import styles from "../Stash.module.css";
import StashSearch from "../StashSearch";
import StashBtn from "../StashBtn";
import AccesoryList from "./AccesoryList";
import StashTab from "../StashTab";

const AccessoryStash = () => {
  const [accesoryList, setAccesoryList] = useState(accesoryData);

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
        <AccesoryList accesoryList={accesoryList} />
      </div>
    </div>
  );
};
export default AccessoryStash;
