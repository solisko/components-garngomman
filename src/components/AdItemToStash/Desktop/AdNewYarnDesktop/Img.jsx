import React from "react";
import style from "./AdNewYarnDesktop.module.css";
import placeholderImg from "./placeholderImg.png";

const Img = ({ yarnPhotoInput }) => {
  return (
    <div classname={style.imgContainer}>
      <img
        src={yarnPhotoInput ? yarnPhotoInput : placeholderImg}
        alt="Bild på nål"
        className={style.imgOfAccesory}
      />
    </div>
  );
};

export default Img;
