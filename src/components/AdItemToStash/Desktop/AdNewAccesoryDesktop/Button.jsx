import React from "react";
import style from "./AdNewAccesoryDesktop.module.css";

const Button = () => {
  return (
    <div className={style.buttonContainer}>
      <button className={style.buttonAdToAccesory}>Lägg till Tillbehör</button>
    </div>
  );
};

export default Button;
