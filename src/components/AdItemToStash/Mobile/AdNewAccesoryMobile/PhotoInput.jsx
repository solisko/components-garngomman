import React from "react";
import style from "./AdNewAccesoryMobile.module.css";

const PhotoInput = ({ setAccesoryPhoto }) => {
  const uploadImageHandler = (e) => {
    setAccesoryPhoto(URL.createObjectURL(e.target.files[0]));
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
