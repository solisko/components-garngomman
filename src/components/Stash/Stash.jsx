import React from "react";
import styles from "./Stash.module.css";
import StashFlikar from "./StashFlikar";
import StashSearch from "./StashSearch";
import StashBtn from "./StashBtn";
import StashList from "./StashList";
import yarnData from "./yarndata.json";
import needleData from "./needleData.json";
import accesoryData from "./accesoryData.json";

const Stash = () => {
  const stashList = [...yarnData, ...needleData, ...accesoryData];

  return (
    <div>
      <StashFlikar />
      <div className={styles.stashContainer}>
        <div className={styles.stashHead}>
          <StashSearch />
          <StashBtn />
        </div>
        <StashList stashList={stashList} />
      </div>
    </div>
  );
};
export default Stash;
