import React from "react";
import styles from './Login.module.css';

const EmailInput = ({ setEmailInput }) => {
    const onEmailInputComplete = (e) => {
        setEmailInput(e.target.value);
    }
    return(
        <div className={styles.emailLoginContainer}>
            <input 
                placeholder='Emailadress' 
                type="email" 
                className={styles.emailInput}
                onBlur={onEmailInputComplete} />
        </div>
    )
}

export default EmailInput;