import React from "react";
import NextButton from "./NextButton";
import User from "./User";
import Password from "./Password";
import styles from './Login.module.css';

const Login = () => {
  return(
    <div className= {styles.loginContainer}>
      Logga in
      <User />
      <Password />
      <NextButton />
    </div>
  )
}

export default Login;