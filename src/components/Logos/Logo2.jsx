import React from "react";
import LogoTitle from "./LogoTitle";
import Nystan from "./Nystan";
import styles from './Logos.module.css'

const Logo2 = () => {
    return(
        <div className={styles.logo2}>
            <Nystan />
            <LogoTitle />
        </div>
    )
}

export default Logo2;