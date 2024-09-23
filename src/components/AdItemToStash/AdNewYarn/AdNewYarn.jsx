import React from "react";
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
  return (
    <div className={style.adNewYarnContainer}>
      <Header />
      <Img />
      <PhotoInput />
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

export default AdNewYarn;
