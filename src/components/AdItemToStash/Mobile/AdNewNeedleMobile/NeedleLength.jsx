import React from "react";
import style from "./AdNewNeedleMobile.module.css";

const NeedleLength = ({ setNeedleLength }) => {
  const needleDiameterHandler = (e) => {
    setNeedleLength(e.target.value);
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
