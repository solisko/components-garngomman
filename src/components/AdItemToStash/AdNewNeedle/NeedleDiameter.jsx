import React from "react";
import style from "./AdNewNeedle.module.css";

const NeedleDiameter = () => {
  return (
    <div className={style.yarnInfo}>
      <input
        type="number"
        placeholder="Diameter (ytter)"
        className={style.needleDiameter}
      />
    </div>
  );
};

export default NeedleDiameter;
