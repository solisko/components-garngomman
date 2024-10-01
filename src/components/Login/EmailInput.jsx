import React from "react";
import styles from './Login.module.css';

const EmailInput = () => {
    return(
        <div className={styles.emailLoginContainer}>
            <input placeholder='Emailadress' type="email" className={styles.emailInput} />
        </div>
    )
}

export default EmailInput;