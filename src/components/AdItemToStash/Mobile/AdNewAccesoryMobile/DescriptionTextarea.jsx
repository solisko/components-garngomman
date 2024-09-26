import React from "react";
import style from "./AdNewAccesoryMobile.module.css";

const DescriptionTextarea = ({ setAccesoryDescriptionInput }) => {
  const descriptionInputStateSetter = (e) => {
    setAccesoryDescriptionInput(e.target.value);
  };

  return (
    <div className={style.descriptionContainer}>
      <textarea
        className={style.textareaAdToAccesory}
        rows={10}
        cols={40}
        placeholder="Beskrivning (valfritt)"
        onBlur={descriptionInputStateSetter}
      ></textarea>
    </div>
  );
};

export default DescriptionTextarea;
