import React from "react";
import NextButton from "./NextButton";
import Header from "../Header/Header";
import EmailInput from "./EmailInput";
import styles from './Login.module.css';

const EmailLoginPage = () => {
    return(
        <div className="emailLoginContainer">
            <Header />
            <EmailInput />
            <NextButton />
        </div>
    )
}

export default EmailLoginPage;