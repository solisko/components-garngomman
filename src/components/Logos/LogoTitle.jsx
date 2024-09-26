import React from "react";;
import TitleVit from '../../Assets/TitleVit.png';
import styles from './Logos.module.css';

const LogoTitle = () => {
    return(
        <div className="logoTitleContainer">
            <img src={TitleVit} alt="Garngömman" className={styles.logoTitle} />
        </div>
    )
}

export default LogoTitle;