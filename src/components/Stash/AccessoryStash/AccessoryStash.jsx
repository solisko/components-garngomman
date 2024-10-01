import React from "react";
import { useState } from "react";
import accesoryData from "../accesoryData.json";
import styles from "../Stash.module.css";
import StashFlikar from "../StashFlikar";
import StashSearch from "../StashSearch";
import StashBtn from "../StashBtn";
import AccesoryList from "./AccesoryList";

const AccessoryStash = () => {
  const [accesoryList, setAccesoryList] = useState(accesoryData);

  return (
    <div>
      <StashFlikar />
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
