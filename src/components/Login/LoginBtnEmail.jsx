import React from "react";
import styles from "./Login.module.css";

const LoginBtnEmail = ({ handleClick }) => {
  return (
    <div className={styles.loginBtnEmailContainer}>
      <button className={styles.loginBtnEmail} onClick={handleClick}>
        LOGGA IN MED EMAIL
      </button>
    </div>
  );
};

export default LoginBtnEmail;
