import React from "react";
import placeholder from "./placeholderImg.png";
import style from "./AdNewNeedleMobile.module.css";

const Img = ({ needlePhoto }) => {
  return (
    <div className={style.imgContainer}>
      <img
        src={needlePhoto ? needlePhoto : placeholder}
        alt="placeholder img"
        className={style.imgOfNeedle}
      />
    </div>
  );
};

export default Img;
