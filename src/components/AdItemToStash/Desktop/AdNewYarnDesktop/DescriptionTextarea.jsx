import React from "react";
import style from "./AdNewYarnDesktop.module.css";

const DescriptionTextarea = ({ setYarnDescriptionInput }) => {
  const yarnDescriptionHandler = (e) => {
    setYarnDescriptionInput(e.target.value);
  };

  return (
    <div className={style.descriptionContainer}>
      <textarea
        className={style.textareaAdToStash}
        rows={10}
        cols={50}
        placeholder="Beskrivning (valfritt)"
        onBlur={yarnDescriptionHandler}
      ></textarea>
    </div>
  );
};

export default DescriptionTextarea;
