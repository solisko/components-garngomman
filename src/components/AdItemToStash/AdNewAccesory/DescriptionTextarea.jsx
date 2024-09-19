import React from "react";
import style from "./AdNewAccesory.module.css";

const DescriptionTextarea = () => {
  return (
    <div className={style.descriptionContainer}>
      <textarea rows={10} cols={30}></textarea>
    </div>
  );
};

export default DescriptionTextarea;
