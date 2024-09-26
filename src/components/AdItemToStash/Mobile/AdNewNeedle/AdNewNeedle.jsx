import React, { useState } from "react";
import style from "./AdNewNeedle.module.css";
import Header from "./Header";
import Img from "./Img";
import DescriptionTextarea from "./DescriptionTextarea";
import PhotoInput from "./PhotoInput";
import NeedleLength from "./NeedleLength";
import NeedleDiameter from "./NeedleDiameter";
import Button from "./Button";
import NameInput from "./NameInput";

const AdNewNeedle = () => {
  const [needlePhotoInput, setNeedlePhotoInput] = useState(null);
  const [needleNameInput, setNeedleNameInput] = useState(null);
  const [needleLengthInput, setNeedleLengthInput] = useState(null);
  const [needleDiameterInput, setNeedleDiameterInput] = useState(null);
  useState(null);
  const [needleDescriptionInput, setNeedleDescriptionInput] = useState(null);

  return (
    <div className={style.adNewNeedleContainer}>
      <Header />
      <Img needlePhotoInput={needlePhotoInput} />
      <PhotoInput setNeedlePhotoInput={setNeedlePhotoInput} />
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

export default AdNewNeedle;
