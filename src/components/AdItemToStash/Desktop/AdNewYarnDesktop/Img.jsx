import React from "react";
import style from "./AdNewYarnDesktop.module.css";
import placeholderImg from "./placeholderImg.png";

const Img = ({ yarnPhoto }) => {
  return (
    <div classname={style.imgContainer}>
      <img
        src={yarnPhoto ? yarnPhoto : placeholderImg}
        alt="Bild på nål"
        className={style.imgOfAccesory}
      />
    </div>
  );
};

export default Img;
