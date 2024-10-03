import React from "react";
import style from "./AdNewNeedleMobile.module.css";

const NeedleDiameter = ({ setNeedleDiameter }) => {
  const needleDiameterHandler = (e) => {
    setNeedleDiameter(e.target.value);
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
