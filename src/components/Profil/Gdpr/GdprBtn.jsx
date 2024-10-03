import React from "react";
import styles from "./Gdpr.module.css";

const GdprBtn = () => {
  return (
    <div className={styles.GdprBtnContainer}>
      <button className={styles.GdprButton}>Ändra Cookie-inställningar</button>
    </div>
  );
};

export default GdprBtn;
