import React from "react";
import style from "./AdNewAccesory.module.css";

const PhotoInput = () => {
  return (
    <div className={style.photoInputContainer}>
      <input type="file" placeholder="Bild på tillbehör" />
    </div>
  );
};

export default PhotoInput;
