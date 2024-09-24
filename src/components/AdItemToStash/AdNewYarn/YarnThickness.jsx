import React from "react";
import style from "./AdNewYarn.module.css";

const YarnThickness = ({ setYarnThicknessInput }) => {
  const yarnThicknessHandler = (e) => {
    setYarnThicknessInput(e.target.value);
  };

  return (
    <>
      <input
        type="number"
        placeholder="Tjocklek (mm)"
        className={style.yarnThicknessInput}
        onBlur={yarnThicknessHandler}
      />
    </>
  );
};

export default YarnThickness;
