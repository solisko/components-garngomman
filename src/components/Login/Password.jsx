import React from "react";
import styles from './Login.module.css';

const Password = () => {
    return(
        <div className={styles.loginPasswordContainer}>
            <form className={styles.loginPasswordForm}>
                <input className={styles.loginPasswordInput} type="password" placeholder="Lösenord" />
            </form>
        </div>
    )
}

export default Password;