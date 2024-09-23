import React from "react";
import styles from './Login.module.css';

const NextButton = () => {
    return(
        <div className={styles.loginNextButtonContainer}>
            <button className={styles.loginNextButton}>Nästa</button>
        </div>
    )
}

export default NextButton;