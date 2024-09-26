import React from "react";
import style from "./AdNewNeedle.module.css";

const NeedleLength = ({ setNeedleLengthInput }) => {
  const needleDiameterHandler = (e) => {
    setNeedleLengthInput(e.target.value);
  };
  return (
    <>
      <input
        type="number"
        placeholder="Längd (mm)"
        className={style.needleLength}
        onBlur={needleDiameterHandler}
      />
    </>
  );
};

export default NeedleLength;
