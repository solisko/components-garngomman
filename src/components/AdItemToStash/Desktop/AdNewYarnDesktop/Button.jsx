import React from "react";
import style from "./AdNewYarnDesktop.module.css";

const Button = ({ setYarnHandler }) => {
  return (
    <div className={style.buttonContainer}>
      <button className={style.buttonAdToStash} onClick={setYarnHandler}>
        Lägg till Garn
      </button>
    </div>
  );
};

export default Button;
