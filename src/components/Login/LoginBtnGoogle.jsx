import React from "react";
import styles from './Login.module.css'

const LoginBtnGoogle = () => {
    return(
        <div className={styles.loginBtnGoogleContainer}>
            <button className={styles.loginBtnGoogle}>LOGGA IN MED GOOGLE</button>
        </div>
    )
}

export default LoginBtnGoogle;