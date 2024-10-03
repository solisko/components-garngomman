import React from "react";
import style from "./AdNewYarnDesktop.module.css";

const YarnThickness = ({ setYarnThickness }) => {
  const yarnThicknessHandler = (e) => {
    setYarnThickness(e.target.value);
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
