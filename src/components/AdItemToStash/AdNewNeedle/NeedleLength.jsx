import React from "react";
import style from "./AdNewNeedle.module.css";

const NeedleLength = () => {
  return (
    <div className={style.yarnInfo}>
      <input
        type="number"
        placeholder="Längd (mm)"
        className={style.needleLength}
      />
    </div>
  );
};

export default NeedleLength;
