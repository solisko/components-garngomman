import React from "react";
import Header from "./Header";
import Img from "./Img";
import DescriptionTextarea from "./DescriptionTextarea";
import PhotoInput from "./PhotoInput";
import NeedleLength from "./NeedleLength";
import NeedleDiameter from "./NeedleDiameter";
import Button from "./Button";
import style from "./AdNewNeedle.module.css";

const AdNewNeedle = () => {
  return (
    <div className={style.adNewNeedleContainer}>
      <Header />
      <Img />
      <PhotoInput />
      <div className={style.needleMeasurements}>
        <NeedleLength />
        <NeedleDiameter />
      </div>
      <DescriptionTextarea />
      <Button />
    </div>
  );
};

export default AdNewNeedle;
