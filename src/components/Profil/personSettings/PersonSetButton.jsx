import React from "react";
import styles from "./PersonSettings.module.css";

const PersonSetButton = () => {
  return (
    <div className={styles.PersonSetButtonContainer}>
      <button className={styles.PersonSetButton}>Spara</button>
    </div>
  );
};

export default PersonSetButton;
