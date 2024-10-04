import React from "react";
import style from "./AdNewAccesoryMobile.module.css";

const NameInput = ({ setAccesoryName }) => {
  const nameInputHandler = (e) => {
    setAccesoryName(e.target.value);
  };

  return (
    <>
      <input
        type="text"
        placeholder="namn på tillbehör"
        onBlur={nameInputHandler}
        className={style.nameInput}
      />
    </>
  );
};

export default NameInput;
