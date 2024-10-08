import React from "react";
import NextButton from "./NextButton";
import EmailInput from "./EmailInput";
import styles from "./Login.module.css";

const EmailLoginPage = ({handleClick}) => {
 
  return (
    <div className="emailLoginContainer">
      <EmailInput />
      <NextButton handleClick={handleClick} />
    </div>
  );
};

export default EmailLoginPage;
