import React from "react";
import style from "./AdNewYarnMobile.module.css";

const DescriptionTextarea = ({ setYarnDescriptionInput }) => {
  const yarnDescriptionHandler = (e) => {
    setYarnDescriptionInput(e.target.value);
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
