import React from "react";
import LogoGulVit from '../../Assets/LogoGulVit.png';
import styles from './Logos.module.css';

const Logo1 = () => {
    return(
        <div className={styles.logo1Container}>
            <img src={LogoGulVit} alt="Logo1" className={styles.logo1} />
        </div>
    )
}

export default Logo1;