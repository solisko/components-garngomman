import React from "react";
import styles from './Login.module.css';

const NextButton = ({ onClick }) => {
    return(
        <div className={styles.loginNextButtonContainer}>
            <button className={styles.loginNextButton} onClick={ onClick }>
                Nästa
            </button>
        </div>
    )
}

export default NextButton;