import React from "react";
import style from "./AdNewYarn.module.css";

const YarnLength = ({ setYarnLengthInput }) => {
  const yarnLengthHandler = (e) => {
    setYarnLengthInput(e.target.value);
  };

  return (
    <div className={style.yarnInfo}>
      <input
        type="number"
        placeholder="Längd (m)"
        className={style.yarnLengthInput}
        onBlur={yarnLengthHandler}
      />
    </div>
  );
};

export default YarnLength;
