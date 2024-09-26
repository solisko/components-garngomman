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

const AdNewYarnDesktop = () => {
  return (
    <div className={style.adNewAccesoryContainer}>
      <div className={style.titleMainContainer}>
        <Title />
      </div>
      <div className={style.imgMainContainer}>
        <Img />
        <PhotoInput />
      </div>
      <NameInput />
      <div className={style.yarnMeasurementsContainer}>
        <YarnLength />
        <YarnWeight />
        <YarnThickness />
      </div>
      <YarnMaterial />
      <DescriptionTextarea />
      <Button />
    </div>
  );
};

export default AdNewYarnDesktop;
