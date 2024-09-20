import React from "react";
import styles from './Login.module.css';

const User = () => {
    return(
        <div className={styles.loginUserContainer}>
            <form className={styles.loginUserForm}>
                <input className={styles.loginUserInput} type="text" placeholder="Användarnamn" />
            </form>
        </div>
    )
}

export default User;