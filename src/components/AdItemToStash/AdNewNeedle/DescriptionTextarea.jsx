import React from "react";
import style from "./AdNewNeedle.module.css";

const DescriptionTextarea = () => {
  return (
    <div className={style.descriptionContainer}>
      <textarea
        className={style.textareaAdToStash}
        rows={10}
        cols={30}
        placeholder="Beskrivning (valfritt)"
      ></textarea>
    </div>
  );
};

export default DescriptionTextarea;
