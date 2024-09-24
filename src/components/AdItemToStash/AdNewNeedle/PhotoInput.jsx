import React from "react";
import style from "./AdNewNeedle.module.css";

const PhotoInput = ({ setNeedlePhotoInput }) => {
  const uploadImageHandler = (e) => {
    setNeedlePhotoInput(e.target.value);
  };

  return (
    <div className={style.photoInputContainer}>
      <input
        type="file"
        placeholder="Bild på tillbehör"
        className={style.imageInput}
        onBlur={uploadImageHandler}
      />
    </div>
  );
};

export default PhotoInput;
