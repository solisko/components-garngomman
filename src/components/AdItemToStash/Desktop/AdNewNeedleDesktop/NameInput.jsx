import React from "react";
import style from "./AdNewNeedleDesktop.module.css";

const NameInput = ({ setNeedleName }) => {
  const nameInputHandler = (e) => {
    setNeedleName(e.target.value);
  };

  return (
    <>
      <input
        type="text"
        placeholder="namn på nål"
        onBlur={nameInputHandler}
        className={style.nameInput}
      />
    </>
  );
};

export default NameInput;
