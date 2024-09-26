import React from "react";
import style from "./AdNewAccesory.module.css";

const NameInput = ({ setAccesoryNameInput }) => {
  const nameInputHandler = (e) => {
    setAccesoryNameInput(e.target.value);
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
