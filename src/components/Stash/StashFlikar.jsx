import React from "react";
import styles from "./Stash.module.css";

const StashFlikar = () => {
  return (
    <div className={styles.StashFlikarContainer}>
      <div>
        <button className={styles.tabBtn}>Flik 1</button>
        <button className={styles.tabBtn}>Flik 2</button>
        <button className={styles.tabBtn}>Flik 3</button>
        <button className={styles.tabBtn}>Flik 4</button>
      </div>
    </div>
  );
};
export default StashFlikar;
