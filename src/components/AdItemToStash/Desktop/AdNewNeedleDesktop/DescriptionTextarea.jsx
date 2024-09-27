import React from "react";
import style from "./AdNewNeedleDesktop.module.css";

const DescriptionTextarea = ({ setNeedleDescriptionInput }) => {
  const needleDescriptionHandler = (e) => {
    setNeedleDescriptionInput(e.target.value);
  };

  return (
    <div className={style.descriptionContainer}>
      <textarea
        className={style.textareaAdToStash}
        rows={10}
        cols={50}
        placeholder="Beskrivning (valfritt)"
        onBlur={needleDescriptionHandler}
      ></textarea>
    </div>
  );
};

export default DescriptionTextarea;
