import React from "react";
import NextButton from "./NextButton";
import Password from "./Password";
import HeaderLogo2 from "../Header/HeaderLogo2";
import styles from './Login.module.css';

const EmailPasswordPage = () => {
    return(
        <div className={styles.emailPasswordContainer}>
            <HeaderLogo2 />
            <Password />
            <NextButton />
        </div>
    )
}

export default EmailPasswordPage;