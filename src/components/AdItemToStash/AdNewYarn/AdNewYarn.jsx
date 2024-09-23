import React, { useState } from "react";
import Button from "./Button";
import Header from "./Header";
import DescriptionTextarea from "./DescriptionTextarea";
import Img from "./Img";
import YarnLength from "./YarnLength";
import YarnWeight from "./YarnWeight";
import YarnThickness from "./YarnThickness";
import YarnMaterial from "./YarnMaterial";
import style from "./AdNewYarn.module.css";
import PhotoInput from "./PhotoInput";

const AdNewYarn = () => {
  const [yarnPhotoInput, setYarnPhotoInput] = useState(null);
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

export default AdNewYarn;
