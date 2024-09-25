import React from "react";
import styles from "./Stash.module.css";

const StashSearch = () => {
  return (
    <div>
      <input className={styles.searchInput} type="text" placeholder="Sök här" />
    </div>
  );
};
export default StashSearch;
