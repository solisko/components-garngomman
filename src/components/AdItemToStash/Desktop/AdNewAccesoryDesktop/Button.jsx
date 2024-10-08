import React from "react";
import style from "./AdNewAccesoryDesktop.module.css";

const Button = ({ loginHandler }) => {
  return (
    <div className={style.buttonContainer}>
      <button className={style.buttonAdToAccesory} onClick={loginHandler}>
        Lägg till Tillbehör
      </button>
    </div>
  );
};

export default Button;
