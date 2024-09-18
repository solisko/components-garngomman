import React from "react";
import NextButton from "./NextButton";
import User from "./User";
import Password from "./Password";

const Login = () => {
  return(
    <div>
      Login
      <User />
      <Password />
      <NextButton />
    </div>
  )
}

export default Login;