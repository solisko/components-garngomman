import React from "react";
import styles from "./PersonSettings.module.css";

const FirstName = () => {
  return (
    <div className={styles.FirstNameContainer}>
      <form className={styles.FirstNameForm}>
        <input
          className={styles.FirstNameInput}
          type="text"
          placeholder="Förnamn"
        />
      </form>
    </div>
  );
};

export default FirstName;
