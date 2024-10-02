import React from "react";
import styles from "./PersonSettings.module.css";

const Email = () => {
  return (
    <div className={styles.EmailContainer}>
      <form className={styles.EmailForm}>
        <input
          className={styles.EmailInput}
          type="text"
          placeholder="E-postadress"
        />
      </form>
    </div>
  );
};

export default Email;
