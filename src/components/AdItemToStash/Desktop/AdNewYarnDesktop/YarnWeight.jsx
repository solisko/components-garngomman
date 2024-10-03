import React from "react";
import style from "./AdNewYarnDesktop.module.css";

const YarnWeight = ({ setYarnWeight }) => {
  const yarnWeightHandler = (e) => {
    setYarnWeight(e.target.value);
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
