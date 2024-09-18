import React from "react";
import NextButton from "./NextButton";
import User from "./User";
import Password from "./Password";
import './Login.module.css';

const Login = () => {
  return(
    <div>
      Logga in
      <User />
      <Password />
      <NextButton />
    </div>
  )
}

export default Login;