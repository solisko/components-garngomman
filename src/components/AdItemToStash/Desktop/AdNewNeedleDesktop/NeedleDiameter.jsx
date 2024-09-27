import React from "react";
import style from "./AdNewNeedleDesktop.module.css";

const NeedleDiameter = ({ setNeedleDiameterInput }) => {
  const needleDiameterHandler = (e) => {
    setNeedleDiameterInput(e.target.value);
  };

  return (
    <>
      <input
        type="number"
        placeholder="Diameter (ytter)"
        className={style.needleDiameter}
        onBlur={needleDiameterHandler}
      />
    </>
  );
};

export default NeedleDiameter;
