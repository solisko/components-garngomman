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

const AdNewNeedleDesktop = ({
  needlePhoto,
  setNeedlePhoto,
  setNeedleName,
  setNeedleLength,
  setNeedleDiameter,
  setNeedleDescription,
  adNeedleHandler,
}) => {
  return (
    <div className={style.adNewNeedleContainer}>
      <div className={style.titleMainContainer}>
        <Title />
      </div>
      <div className={style.imgMainContainer}>
        <Img needlePhoto={needlePhoto} />
        <PhotoInput setNeedlePhoto={setNeedlePhoto} />
      </div>
      <NameInput setNeedleName={setNeedleName} />
      <div className={style.needleMeasurements}>
        <NeedleLength setNeedleLength={setNeedleLength} />
        <NeedleDiameter setNeedleDiameter={setNeedleDiameter} />
      </div>
      <DescriptionTextarea setNeedleDescription={setNeedleDescription} />
      <Button adNeedleHandler={adNeedleHandler} />
    </div>
  );
};

export default AdNewNeedleDesktop;
