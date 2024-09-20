import React from "react";
import style from "./AdNewNeedle.module.css";

const PhotoInput = () => {
  return (
    <div className={style.photoInputContainer}>
      <input type="file" placeholder="Bild på tillbehör" />
    </div>
  );
};

export default PhotoInput;
