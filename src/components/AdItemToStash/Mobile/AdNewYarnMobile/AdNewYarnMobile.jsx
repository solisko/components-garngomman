import React from "react";
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

const AdNewYarnMobile = ({
  yarnPhoto,
  setYarnPhoto,
  setYarnName,
  setYarnLength,
  setYarnWeight,
  setYarnThickness,
  setYarnMaterial,
  setYarnDescription,
  setYarnHandler,
}) => {
  return (
    <div className={style.adNewYarnContainer}>
      <Header />
      <Img yarnPhoto={yarnPhoto} />
      <PhotoInput setYarnPhoto={setYarnPhoto} />
      <NameInput setYarnName={setYarnName} />
      <div className={style.yarnMeasurementsContainer}>
        <YarnLength setYarnLength={setYarnLength} />
        <YarnWeight setYarnWeight={setYarnWeight} />
        <YarnThickness setYarnThickness={setYarnThickness} />
      </div>
      <YarnMaterial setYarnMaterial={setYarnMaterial} />
      <DescriptionTextarea setYarnDescription={setYarnDescription} />
      <Button setYarnHandler={setYarnHandler} />
    </div>
  );
};

export default AdNewYarnMobile;
