import React from "react";
import NextButton from "./NextButton";
import EmailInput from "./EmailInput";
import styles from './Login.module.css';
import { useNavigate } from 'react-router-dom';

const EmailLoginPage = () => {
    const handleClick = () => {
        const navigate = useNavigate()
            navigate('/EmailPasswordPage');
    }
    return(
        <div className="emailLoginContainer">
            <EmailInput />
            <NextButton onClick = { handleClick } />
        </div>
    )
}

export default EmailLoginPage;