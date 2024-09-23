import React from "react";
import style from "./AdNewNeedle.module.css";

const NeedleDiameter = ({ setNeedleDiameterInput }) => {
  const needleDiameterHandler = (e) => {
    setNeedleDiameterInput(e.target.value);
  };

  return (
    <div className={style.yarnInfo}>
      <input
        type="number"
        placeholder="Diameter (ytter)"
        className={style.needleDiameter}
        onBlur={needleDiameterHandler}
      />
    </div>
  );
};

export default NeedleDiameter;
