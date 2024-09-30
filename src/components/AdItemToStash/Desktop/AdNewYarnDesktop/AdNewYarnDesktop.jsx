import React, { useState } from "react";
import style from "./AdNewYarnDesktop.module.css";
import Title from "./Title";
import Img from "./Img";
import PhotoInput from "./PhotoInput";
import Button from "./Button";
import DescriptionTextarea from "./DescriptionTextarea";
import NameInput from "./NameInput";
import YarnMaterial from "./YarnMaterial";
import YarnLength from "./YarnLength";
import YarnWeight from "./YarnWeight";
import YarnThickness from "./YarnThickness";

const AdNewYarnDesktop = () => {
  const [yarnPhotoInput, setYarnPhotoInput] = useState(null);
  const [yarnNameInput, setYarnNameInput] = useState(null);
  const [yarnLengthInput, setYarnLengthInput] = useState(null);
  const [yarnWeightInput, setYarnWeightInput] = useState(null);
  useState(null);
  const [yarnThicknessInput, setYarnThicknessInput] = useState(null);
  const [yarnMaterialInput, setYarnMaterialInput] = useState(null);
  const [yarnDescriptionInput, setYarnDescriptionInput] = useState(null);

  return (
    <div className={style.adNewYarnContainer}>
      <div className={style.titleMainContainer}>
        <Title />
      </div>
      <div className={style.imgMainContainer}>
        <Img yarnPhotoInput={yarnPhotoInput} />
        <PhotoInput setYarnPhotoInput={setYarnPhotoInput} />
      </div>
      <NameInput setYarnNameInput={setYarnNameInput} />
      <div className={style.yarnMeasurementsContainer}>
        <YarnLength setYarnLengthInput={setYarnLengthInput} />
        <YarnWeight setYarnWeightInput={setYarnWeightInput} />
        <YarnThickness setYarnThicknessInput={setYarnThicknessInput} />
      </div>
      <YarnMaterial setYarnMaterialInput={setYarnMaterialInput} />
      <DescriptionTextarea setYarnDescriptionInput={setYarnDescriptionInput} />
      <Button />
    </div>
  );
};

export default AdNewYarnDesktop;
