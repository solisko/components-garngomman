import React from "react";
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

const AdNewYarnDesktop = ({
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
      <div className={style.titleMainContainer}>
        <Title />
      </div>
      <div className={style.imgMainContainer}>
        <Img yarnPhoto={yarnPhoto} />
        <PhotoInput setYarnPhoto={setYarnPhoto} />
      </div>
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

export default AdNewYarnDesktop;
