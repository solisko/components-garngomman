import React from "react";
import style from "./AdNewYarn.module.css";

const YarnLength = () => {
  return (
    <div className={style.yarnInfo}>
      <input
        type="number"
        placeholder="Längd (m)"
        className={style.yarnLengthInput}
      />
    </div>
  );
};

export default YarnLength;
