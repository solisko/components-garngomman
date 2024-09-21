import React from "react";
import placeholder from "./placeholderImg.png";
import style from "./AdNewAccesory.module.css";

const Img = () => {
  return (
    <div className={style.imgContainer}>
      <img
        src={placeholder}
        alt="placeholder bild"
        className={style.imgOfAccesory}
      />
    </div>
  );
};

export default Img;
