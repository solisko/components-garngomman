import React from "react";
import style from "./AdNewYarn.module.css";

const YarnMaterial = ({ setYarnMaterialInput }) => {
  const yarnMaterialHandler = (e) => {
    setYarnMaterialInput(e.target.value);
  };

  return (
    <div className={style.yarnInfo}>
      <input
        type="text"
        placeholder="Material (ex, 45% ull 55% Bomull"
        className={style.yarnMaterialInput}
        onBlur={yarnMaterialHandler}
      />
    </div>
  );
};

export default YarnMaterial;
