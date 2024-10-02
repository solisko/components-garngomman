import React from "react";
import styles from "./PersonSettings.module.css";

const PhoneNumber = () => {
  return (
    <div className={styles.PhoneNumberContainer}>
      <form className={styles.PhoneNumberForm}>
        <input
          className={styles.PhoneNumberInput}
          type="text"
          placeholder="E-postadress"
        />
      </form>
    </div>
  );
};

export default PhoneNumber;
