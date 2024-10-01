import React from "react";
import Header from "../Header/Header";
import NextButton from "./NextButton";
import Password from "./Password";

const EmailPasswordPage = () => {
    return(
        <div>
            <Header />
            <Password />
            <NextButton />
        </div>
    )
}

export default EmailPasswordPage;