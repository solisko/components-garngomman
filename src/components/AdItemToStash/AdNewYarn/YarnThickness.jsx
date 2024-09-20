import React from "react";
import style from "./AdNewYarn.module.css";

const YarnThickness = () => {
  return (
    <div className={style.yarnInfo}>
      <input
        type="number"
        placeholder="Tjocklek (mm)"
        className={style.yarnThicknessInput}
      />
    </div>
  );
};

export default YarnThickness;
