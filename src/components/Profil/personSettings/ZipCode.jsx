import React from "react";
import styles from "./PersonSettings.module.css";

const ZipCode = () => {
  return (
    <div className={styles.ZipCodeContainer}>
      <form className={styles.ZipCodeForm}>
        <input
          className={styles.ZipCodeInput}
          type="text"
          placeholder="Postnummer"
        />
      </form>
    </div>
  );
};

export default ZipCode;
