import React, { useState } from "react";
import style from "./AdNewAccesory.module.css";
import Header from "./Header";
import PhotoInput from "./PhotoInput";
import DescriptionTextarea from "./DescriptionTextarea";
import Button from "./Button";
import Img from "./Img";
import NameInput from "./NameInput";

const AdNewAccesory = () => {
  const [accesoryNameInput, setAccesoryNameInput] = useState(null);
  const [accesoryPhotoInput, setAccesoryPhotoInput] = useState(null);
  const [accesoryDescriptionInput, setAccesoryDescriptionInput] =
    useState(null);

  return (
    <div className={style.adNewAccesoryContainer}>
      <Header />
      <Img accesoryPhotoInput={accesoryPhotoInput} />
      <PhotoInput
        setAccesoryPhotoInput={setAccesoryPhotoInput}
        accesoryPhotoInput={accesoryPhotoInput}
      />
      <NameInput setAccesoryNameInput={setAccesoryNameInput} />
      <DescriptionTextarea
        setAccesoryDescriptionInput={setAccesoryDescriptionInput}
      />
      <Button />
    </div>
  );
};

export default AdNewAccesory;
