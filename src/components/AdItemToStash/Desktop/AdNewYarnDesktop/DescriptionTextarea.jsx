import React from "react";
import style from "./AdNewYarnDesktop.module.css";

const DescriptionTextarea = ({ setYarnDescription }) => {
  const yarnDescriptionHandler = (e) => {
    setYarnDescription(e.target.value);
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
