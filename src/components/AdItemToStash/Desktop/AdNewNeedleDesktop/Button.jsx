import React from "react";
import style from "./AdNewNeedleDesktop.module.css";

const Button = ({ adNewNeedleHandler }) => {
  return (
    <div className={style.buttonContainer}>
      <button className={style.buttonAdToStash} onClick={adNewNeedleHandler}>
        Lägg till Nål
      </button>
    </div>
  );
};

export default Button;
