import React from "react";
import style from "./AdNewAccesory.module.css";

const DescriptionTextarea = ({ setAccesoryDescriptionInput }) => {
  const descriptionInputStateSetter = (e) => {
    setAccesoryDescriptionInput(e.target.value);
  };

  return (
    <div className={style.descriptionContainer}>
      <textarea
        className={style.textareaAdToAccesory}
        rows={10}
        cols={30}
        placeholder="Beskrivning (valfritt)"
        onBlur={descriptionInputStateSetter}
      ></textarea>
    </div>
  );
};

export default DescriptionTextarea;
