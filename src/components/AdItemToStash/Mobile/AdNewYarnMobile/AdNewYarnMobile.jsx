import React, { useState } from "react";
import style from "./AdNewYarnMobile.module.css";
import Button from "./Button";
import Header from "./Header";
import DescriptionTextarea from "./DescriptionTextarea";
import Img from "./Img";
import YarnLength from "./YarnLength";
import YarnWeight from "./YarnWeight";
import YarnThickness from "./YarnThickness";
import YarnMaterial from "./YarnMaterial";
import PhotoInput from "./PhotoInput";
import NameInput from "./NameInput";

const AdNewYarnMobile = () => {
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
      <Header />
      <Img yarnPhotoInput={yarnPhotoInput} />
      <PhotoInput setYarnPhotoInput={setYarnPhotoInput} />
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

export default AdNewYarnMobile;
