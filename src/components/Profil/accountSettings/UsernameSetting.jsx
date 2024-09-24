import React from "react";
import styles from "./AccountSettings.module.css";

const UsernameSetting = () => {
  return (
    <div className={styles.UsernameSettingContainer}>
      <form className={styles.UsernameSettingForm}>
        <input
          className={styles.UsernameSettingInput}
          type="text"
          placeholder="Användarnamn"
        ></input>
      </form>
    </div>
  );
};

export default UsernameSetting;
