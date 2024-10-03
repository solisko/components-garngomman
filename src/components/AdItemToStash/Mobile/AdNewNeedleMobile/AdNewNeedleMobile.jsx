import React, { useState } from "react";
import style from "./AdNewNeedleMobile.module.css";
import Header from "./Header";
import Img from "./Img";
import DescriptionTextarea from "./DescriptionTextarea";
import PhotoInput from "./PhotoInput";
import NeedleLength from "./NeedleLength";
import NeedleDiameter from "./NeedleDiameter";
import Button from "./Button";
import NameInput from "./NameInput";

const AdNewNeedleMobile = ({
  needlePhoto,
  setNeedlePhoto,
  setNeedleName,
  setNeedleLength,
  setNeedleDiameter,
  setNeedleDescription,
  adNewNeedleHandler,
}) => {
  return (
    <div className={style.adNewNeedleContainer}>
      <Header />
      <Img needlePhoto={needlePhoto} />
      <PhotoInput setNeedlePhoto={setNeedlePhoto} />
      <NameInput setNeedleName={setNeedleName} />
      <div className={style.needleMeasurements}>
        <NeedleLength setNeedleLength={setNeedleLength} />
        <NeedleDiameter setNeedleDiameter={setNeedleDiameter} />
      </div>
      <DescriptionTextarea setNeedleDescription={setNeedleDescription} />
      <Button adNewNeedleHandler={adNewNeedleHandler} />
    </div>
  );
};

export default AdNewNeedleMobile;
