import React from "react";
import GUgarn from '../../Assets/GUgarn.png';
import styles from './Logos.module.css';

const Nystan = () => {
    return(
        <div className="nystanContainer">
            <img src={GUgarn} alt="Gult garnnystan" className={styles.nystan} />
        </div>
        )
}

export default Nystan;