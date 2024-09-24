import React from "react";
import styles from "./AccountSettings.module.css";

const EmailSetting = () => {
  return (
    <div className={styles.EmailSettingContainer}>
      <form className={styles.EmailSettingForm}>
        <input
          className={styles.EmailSettingInput}
          type="text"
          placeholder="Epostadress"
        />
      </form>
    </div>
  );
};

export default EmailSetting;
