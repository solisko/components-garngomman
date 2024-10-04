import React from "react";
import styles from "./Button.module.css";

const Button = ({ buttonTitle, onClickHandler }) => {
  return (
    <div className={styles.buttonContainer}>
      <button className={styles.btnAdToStash} onClick={onClickHandler}>
        {buttonTitle || "no title"}
      </button>
    </div>
  );
};

export default Button;
