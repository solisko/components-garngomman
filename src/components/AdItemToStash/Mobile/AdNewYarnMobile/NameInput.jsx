import React from "react";
import style from "./AdNewYarnMobile.module.css";

const NameInput = ({ setYarnName }) => {
  const nameInputHandler = (e) => {
    setYarnName(e.target.value);
  };

  return (
    <>
      <input
        type="text"
        placeholder="namn på garn"
        onBlur={nameInputHandler}
        className={style.nameInput}
      />
    </>
  );
};

export default NameInput;
