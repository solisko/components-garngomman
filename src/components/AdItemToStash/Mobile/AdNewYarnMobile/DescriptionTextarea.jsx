import React from "react";
import style from "./AdNewYarnMobile.module.css";

const DescriptionTextarea = ({ setYarnDescription }) => {
  const yarnDescriptionHandler = (e) => {
    setYarnDescription(e.target.value);
  };

  return (
    <>
      <textarea
        className={style.textareaAdToStash}
        rows={10}
        cols={50}
        placeholder="Beskrivning (valfritt)"
        onBlur={yarnDescriptionHandler}
      ></textarea>
    </>
  );
};

export default DescriptionTextarea;
