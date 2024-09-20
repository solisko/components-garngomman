import React from "react";
import style from "./AdNewYarn.module.css";

const YarnWeight = () => {
  return (
    <div className={style.yarnInfo}>
      <input
        type="number"
        placeholder="Vikt (g)"
        className={style.yarnWeightInput}
      />
    </div>
  );
};

export default YarnWeight;
