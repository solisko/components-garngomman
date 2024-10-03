import React from "react";
import style from "./AdNewYarnMobile.module.css";

const YarnLength = ({ setYarnLength }) => {
  const yarnLengthHandler = (e) => {
    setYarnLength(e.target.value);
  };

  return (
    <>
      <input
        type="number"
        placeholder="Längd (m)"
        className={style.yarnLengthInput}
        onBlur={yarnLengthHandler}
      />
    </>
  );
};

export default YarnLength;
