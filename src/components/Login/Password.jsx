import React from "react";
import styles from './Login.module.css';

const Password = ({ setPassword }) => {
    const onPasswordChange = (e) => {
        setPassword(e.target.value);
    }
    return(
        <div className={styles.loginPasswordContainer}>
            <form className={styles.loginPasswordForm}>
                <input 
                    className={styles.loginPasswordInput} 
                    type="password" 
                    placeholder="Lösenord"
                    onChange={ onPasswordChange } 
                />
            </form>
        </div>
    )
}

export default Password;