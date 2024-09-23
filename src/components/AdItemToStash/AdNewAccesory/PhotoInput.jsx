import React from "react";
import style from "./AdNewAccesory.module.css";

const PhotoInput = ({ setAccesoryPhotoInput }) => {
  const uploadImageHandler = (e) => {
    setAccesoryPhotoInput(e.target.value);
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
