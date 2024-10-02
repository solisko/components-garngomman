import React from "react";
import styles from "./PersonSettings.module.css";

const LastName = () => {
  return (
    <div className={styles.LastNameContainer}>
      <form className={styles.LastNameForm}>
        <input
          className={styles.LastNameInput}
          type="text"
          placeholder="E-postadress"
        />
      </form>
    </div>
  );
};

export default LastName;
