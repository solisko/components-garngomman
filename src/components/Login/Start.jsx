import React from "react";
import Logo1 from "../Logos/Logo1";
import LoginBtnEmail from "./LoginBtnEmail";
import LoginBtnGoogle from "./LoginBtnGoogle";
import LoginBtnApple from "./LoginBtnApple";
import styles from "./Login.module.css";

const Start = ({handleClick}) => {
  return (
    <div className={styles.startContainer}>
      <Logo1 />
      <LoginBtnEmail handleClick={handleClick} />
      <LoginBtnApple />
      <LoginBtnGoogle />
    </div>
  );
};

export default Start;
