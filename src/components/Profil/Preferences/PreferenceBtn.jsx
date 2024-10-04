import React from "react";
import styles from "./Preferences.module.css";

const PreferenceBtn = () => {
  return (
    <div className={styles.PreferenceBtnContainer}>
      <button className={styles.PreferenceBtn}>Spara ändringar</button>
    </div>
  );
};

export default PreferenceBtn;
