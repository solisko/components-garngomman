import React, { useState } from "react";
import style from "./AdNewNeedleDesktop.module.css";
import Title from "./Title";
import Img from "./Img";
import DescriptionTextarea from "./DescriptionTextarea";
import PhotoInput from "./PhotoInput";
import NeedleLength from "./NeedleLength";
import NeedleDiameter from "./NeedleDiameter";
import Button from "./Button";
import NameInput from "./NameInput";

const AdNewNeedleDesktop = () => {
  const [needlePhotoInput, setNeedlePhotoInput] = useState(null);
  const [needleNameInput, setNeedleNameInput] = useState(null);
  const [needleLengthInput, setNeedleLengthInput] = useState(null);
  const [needleDiameterInput, setNeedleDiameterInput] = useState(null);
  useState(null);
  const [needleDescriptionInput, setNeedleDescriptionInput] = useState(null);

  return (
    <div className={style.adNewNeedleContainer}>
      <div className={style.titleMainContainer}>
        <Title />
      </div>
      <div className={style.imgMainContainer}>
        <Img needlePhotoInput={needlePhotoInput} />
        <PhotoInput setNeedlePhotoInput={setNeedlePhotoInput} />
      </div>
      <NameInput setNeedleNameInput={setNeedleNameInput} />
      <div className={style.needleMeasurements}>
        <NeedleLength setNeedleLengthInput={setNeedleLengthInput} />
        <NeedleDiameter setNeedleDiameterInput={setNeedleDiameterInput} />
      </div>
      <DescriptionTextarea
        setNeedleDescriptionInput={setNeedleDescriptionInput}
      />
      <Button />
    </div>
  );
};

export default AdNewNeedleDesktop;
