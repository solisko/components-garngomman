import React from "react";
import NextButton from "./NextButton";
import EmailInput from "./EmailInput";
import styles from './Login.module.css';
import HeaderLogo2 from "../Header/HeaderLogo2";

const EmailLoginPage = () => {
    return(
        <div className="emailLoginContainer">
            <HeaderLogo2 />
            <EmailInput />
            <NextButton />
        </div>
    )
}

export default EmailLoginPage;