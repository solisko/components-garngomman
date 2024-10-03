import React from "react";
import style from "./AdNewAccesoryDesktop.module.css";
import Title from "./Title";
import PhotoInput from "./PhotoInput";
import DescriptionTextarea from "./DescriptionTextarea";
import Button from "./Button";
import Img from "./Img";
import NameInput from "./NameInput";

const AdNewAccesoryDesktop = ({
  setAccesoryName,
  accesoryPhoto,
  setAccesoryPhoto,
  setAccesoryDescription,
  loginHandler,
}) => {
  return (
    <div className={style.adNewAccesoryContainer}>
      <div className={style.titleMainContainer}>
        <Title />
      </div>
      <div className={style.imgMainContainer}>
        <Img accesoryPhoto={accesoryPhoto} />
        <PhotoInput setAccesoryPhoto={setAccesoryPhoto} />
      </div>
      <NameInput setAccesoryName={setAccesoryName} />
      <DescriptionTextarea setAccesoryDescription={setAccesoryDescription} />
      <Button loginHandler={loginHandler} />
    </div>
  );
};

export default AdNewAccesoryDesktop;
