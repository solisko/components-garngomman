import React from "react";
import style from "./AdNewNeedleDesktop.module.css";

const DescriptionTextarea = ({ setNeedleDescription }) => {
  const needleDescriptionHandler = (e) => {
    setNeedleDescription(e.target.value);
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
