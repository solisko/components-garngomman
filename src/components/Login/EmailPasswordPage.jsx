import React from "react";
import NextButton from "./NextButton";
import Password from "./Password";
import HeaderLogo2 from "../Header/HeaderLogo2";
import styles from './Login.module.css';
import { useNavigate } from 'react-router-dom';

const EmailPasswordPage = () => {
    const handleClick = () => {
        const navigate = useNavigate()
        navigate('/profil');
    }

    return(
        <div className={styles.emailPasswordContainer}>
            <Password />
            <NextButton onClick={handleClick} />
        </div>
    )
}

export default EmailPasswordPage;