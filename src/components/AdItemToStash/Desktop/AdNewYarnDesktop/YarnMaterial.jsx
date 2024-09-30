import React from "react";
import style from "./AdNewYarnDesktop.module.css";

const YarnMaterial = ({ setYarnMaterialInput }) => {
  const yarnMaterialHandler = (e) => {
    setYarnMaterialInput(e.target.value);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Material (ex, 45% ull 55% Bomull"
        className={style.yarnMaterialInput}
        onBlur={yarnMaterialHandler}
      />
    </>
  );
};

export default YarnMaterial;
