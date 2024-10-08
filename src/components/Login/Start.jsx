import React from "react";
import Logo1 from '../Logos/Logo1'
import LoginBtnEmail from "./LoginBtnEmail";
import LoginBtnGoogle from "./LoginBtnGoogle";
import LoginBtnApple from "./LoginBtnApple";
import styles from './Login.module.css';
import { useNavigate } from "react-router-dom";

const Start = () => {
    const handleClick = () => {
        const navigate = useNavigate()
            navigate = ('/EmailLoginPage');
    }
    return(
        <div className={styles.startContainer}>
            <Logo1 />
            <LoginBtnEmail onClick = { handleClick }/>
            <LoginBtnApple />
            <LoginBtnGoogle />
        </div>
    )
}

export default Start;