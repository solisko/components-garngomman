import React from "react";
import style from "./AdNewNeedleDesktop.module.css";

const Button = () => {
  return (
    <div className={style.buttonContainer}>
      <button className={style.buttonAdToStash}>Lägg till Nål</button>
    </div>
  );
};

export default Button;
