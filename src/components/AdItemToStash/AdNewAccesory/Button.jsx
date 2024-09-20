import React from "react";
import style from "./AdNewAccesory.module.css";

const Button = () => {
  return (
    <div className={style.buttonContainer}>
      <button className={style.buttonAdToStash}>Lägg till Tillbehör</button>
    </div>
  );
};

export default Button;
