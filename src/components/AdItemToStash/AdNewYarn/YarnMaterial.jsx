import React from "react";
import style from "./AdNewYarn.module.css";

const YarnMaterial = () => {
  return (
    <div className={style.yarnInfo}>
      <input
        type="text"
        placeholder="Material (ex, 45% ull 55% Bomull"
        className={style.yarnMaterialInput}
      />
    </div>
  );
};

export default YarnMaterial;
