import React from "react";
import placeholder from "./placeholderImg.png";
import style from "./AdNewNeedle.module.css";

const Img = ({ needlePhotoInput }) => {
  return (
    <div className={style.imgContainer}>
      <img
        src={needlePhotoInput ? needlePhotoInput : placeholder}
        alt="placeholder img"
        className={style.imgOfNeedle}
      />
    </div>
  );
};

export default Img;
