import React from "react";
import placeholder from "./placeholderImg.png";
import style from "./AdNewAccesoryMobile.module.css";

const Img = ({ accesoryPhoto }) => {
  return (
    <div className={style.imgContainer}>
      <img
        src={accesoryPhoto ? accesoryPhoto : placeholder}
        alt="placeholder bild"
        className={style.imgOfAccesory}
      />
    </div>
  );
};

export default Img;
