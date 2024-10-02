import React, { useState } from "react";
import style from "./AdNewAccesoryDesktop.module.css";
import Title from "./Title";
import PhotoInput from "./PhotoInput";
import DescriptionTextarea from "./DescriptionTextarea";
import Button from "./Button";
import Img from "./Img";
import NameInput from "./NameInput";

const AdNewAccesoryMobile = () => {
  const [accesoryNameInput, setAccesoryNameInput] = useState(null);
  const [accesoryPhotoInput, setAccesoryPhotoInput] = useState(null);
  const [accesoryDescriptionInput, setAccesoryDescriptionInput] =
    useState(null);

  return (
    <div className={style.adNewAccesoryContainer}>
      <div className={style.titleMainContainer}>
        <Title />
      </div>
      <div className={style.imgMainContainer}>
        <Img accesoryPhotoInput={accesoryPhotoInput} />
        <PhotoInput setAccesoryPhotoInput={setAccesoryPhotoInput} />
      </div>
      <NameInput setAccesoryNameInput={setAccesoryNameInput} />
      <DescriptionTextarea
        setAccesoryDescriptionInput={setAccesoryDescriptionInput}
      />
      <Button />
    </div>
  );
};

export default AdNewAccesoryMobile;
