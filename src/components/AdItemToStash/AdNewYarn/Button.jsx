import React from "react";
import style from "./AdNewYarn.module.css";

const Button = () => {
  return (
    <div className={style.buttonContainer}>
      <button className={style.buttonAdToStash}>Lägg till Garn</button>
    </div>
  );
};

export default Button;
