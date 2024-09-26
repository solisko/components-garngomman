import React from "react";
import style from "./AdNewAccesoryMobile.module.css";

const Button = () => {
  return (
    <div className={style.buttonContainer}>
      <button className={style.buttonAdToAccesory}>Lägg till Tillbehör</button>
    </div>
  );
};

export default Button;
