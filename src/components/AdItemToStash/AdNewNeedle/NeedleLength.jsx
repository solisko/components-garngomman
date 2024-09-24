import React from "react";
import style from "./AdNewNeedle.module.css";

const NeedleLength = ({ setNeedleLengthInput }) => {
  const needleDiameterHandler = (e) => {
    setNeedleLengthInput(e.target.value);
  };
  return (
    <div className={style.yarnInfo}>
      <input
        type="number"
        placeholder="Längd (mm)"
        className={style.needleLength}
        onBlur={needleDiameterHandler}
      />
    </div>
  );
};

export default NeedleLength;
