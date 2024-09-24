import React from "react";
import style from "./AdNewYarn.module.css";

const PhotoInput = ({ setYarnPhotoInput }) => {
  const yarnPhotoHandler = (e) => {
    setYarnPhotoInput(e.target.value);
  };
  return (
    <div className={style.photoInputContainer}>
      <input
        type="file"
        placeholder="Bild på tillbehör"
        className={style.imageInput}
        onBlur={yarnPhotoHandler}
      />
    </div>
  );
};

export default PhotoInput;
