import React from "react";
import styles from "./AccountSettings.module.css";

const PasswordSetting = () => {
  return (
    <div className={styles.PasswordSettingContainer}>
      <form className={styles.PasswordSettingForm}>
        <input
          className={styles.PasswordSettingInput}
          type="text"
          placeholder="Lösenord"
        />
      </form>
    </div>
  );
};

export default PasswordSetting;
