import React from "react";
import style from "./AdNewYarn.module.css";

const YarnWeight = ({ setYarnWeightInput }) => {
  const yarnWeightHandler = (e) => {
    setYarnWeightInput(e.target.value);
  };

  return (
    <>
      <input
        type="number"
        placeholder="Vikt (g)"
        className={style.yarnWeightInput}
        onBlur={yarnWeightHandler}
      />
    </>
  );
};

export default YarnWeight;
