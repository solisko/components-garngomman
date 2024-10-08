import React from "react";
import NextButton from "./NextButton";
import Password from "./Password";
import styles from "./Login.module.css";

const EmailPasswordPage = ({ handleClick }) => {
  return (
    <div className={styles.emailPasswordContainer}>
      <Password />
      <NextButton handleClick={handleClick} />
    </div>
  );
};

export default EmailPasswordPage;
