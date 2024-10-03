import React from "react";
import placeholder from "./placeholderImg.png";
import style from "./AdNewYarnMobile.module.css";

const Img = ({ yarnPhoto }) => {
  return (
    <div className={style.imgContainer}>
      <img
        src={yarnPhoto ? yarnPhoto : placeholder}
        alt="placeholder img"
        className={style.imgOfYarn}
      />
    </div>
  );
};

export default Img;
