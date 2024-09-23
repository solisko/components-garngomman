import React from "react";
import placeholder from "./placeholderImg.png";
import style from "./AdNewYarn.module.css";

const Img = () => {
  return (
    <div className={style.imgContainer}>
      <img
        src={placeholder}
        alt="placeholder img"
        className={style.imgOfYarn}
      />
    </div>
  );
};

export default Img;
