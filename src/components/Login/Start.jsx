import React from "react";
import Logo1 from '../Logos/Logo1'
import LoginBtnEmail from "./LoginBtnEmail";
import LoginBtnGoogle from "./LoginBtnGoogle";
import LoginBtnApple from "./LoginBtnApple";

const Start = () => {
    return(
        <div>
            <Logo1 />
            <LoginBtnEmail />
            <LoginBtnApple />
            <LoginBtnGoogle />
        </div>
    )
}

export default Start;