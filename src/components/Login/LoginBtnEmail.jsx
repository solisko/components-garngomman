import React from "react";
import styles from './Login.module.css'

const LoginBtnEmail = ({ onClick }) => {

    return(
        <div className={styles.loginBtnEmailContainer}>
            <button className={styles.loginBtnEmail} onClick={ onClick }>
                LOGGA IN MED EMAIL
            </button>
        </div>
    )
}

export default LoginBtnEmail;