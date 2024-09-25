import React from "react";
import styles from "./AccountSettings.module.css";

const SettingsButton = () => {
  return (
    <div className={styles.settingsBtnContainer}>
      <button className={styles.settingBtn}>Spara</button>
    </div>
  );
};

export default SettingsButton;
