import React from "react";
import style from "./AdNewYarnDesktop.module.css";
import placeholderImg from "./placeholderImg.png";

const Img = ({ photoInputDesktop }) => {
  return (
    <div classname={style.imgContainer}>
      <img
        src={photoInputDesktop ? photoInputDesktop : placeholderImg}
        alt=""
        className={style.imgOfAccesory}
      />
    </div>
  );
};

export default Img;
