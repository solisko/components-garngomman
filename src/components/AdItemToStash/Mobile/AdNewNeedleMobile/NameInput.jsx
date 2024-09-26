import React from "react";
import style from "./AdNewNeedleMobile.module.css";

const NameInput = ({ setNeedleNameInput }) => {
  const nameInputHandler = (e) => {
    setNeedleNameInput(e.target.value);
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
