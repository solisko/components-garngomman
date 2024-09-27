import React from "react";
import style from "./AdNewNeedleDesktop.module.css";

const PhotoInput = ({ setNeedlePhotoInput }) => {
  const uploadImageHandler = (e) => {
    setNeedlePhotoInput(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div className={style.photoInputContainer}>
      <input
        type="file"
        placeholder="Bild på tillbehör"
        className={style.imageInput}
        onChange={uploadImageHandler}
      />
    </div>
  );
};

export default PhotoInput;
