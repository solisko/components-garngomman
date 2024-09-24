import React from "react";
import styles from './Login.module.css'

const LoginBtnEmail = () => {
    return(
        <div className={styles.loginBtnEmailContainer}>
            <button className={styles.loginBtnEmail}>LOGGA IN MED EMAIL</button>
        </div>
    )
}

export default LoginBtnEmail;