import React from "react";
import style from "./AdNewYarnMobile.module.css";

const PhotoInput = ({ setYarnPhotoInput }) => {
  const yarnPhotoHandler = (e) => {
    setYarnPhotoInput(URL.createObjectURL(e.target.files[0]));
  };
  return (
    <div className={style.photoInputContainer}>
      <input
        type="file"
        placeholder="Bild på tillbehör"
        className={style.imageInput}
        onChange={yarnPhotoHandler}
      />
    </div>
  );
};

export default PhotoInput;
