import React from "react";
import styles from "./Login.module.css";

const NextButton = ({ handleClick }) => {
  return (
    <div className={styles.loginNextButtonContainer}>
      <button className={styles.loginNextButton} onClick={handleClick}>
        Nästa
      </button>
    </div>
  );
};

export default NextButton;
