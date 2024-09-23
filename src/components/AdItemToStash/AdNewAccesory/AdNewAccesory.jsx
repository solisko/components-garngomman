import React from "react";
import style from "./AdNewAccesory.module.css";
import Header from "./Header";
import PhotoInput from "./PhotoInput";
import DescriptionTextarea from "./DescriptionTextarea";
import Button from "./Button";
import Img from "./Img";

const AdNewAccesory = () => {
  return (
    <div className={style.adNewAccesoryContainer}>
      <Header />
      <Img />
      <PhotoInput />
      <DescriptionTextarea />
      <Button />
    </div>
  );
};

export default AdNewAccesory;
