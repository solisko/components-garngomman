import React from "react";
import style from "./AdNewAccesoryMobile.module.css";
import Header from "./Header";
import PhotoInput from "./PhotoInput";
import DescriptionTextarea from "./DescriptionTextarea";
import Button from "./Button";
import Img from "./Img";
import NameInput from "./NameInput";

const AdNewAccesoryMobile = ({
  setAccesoryName,
  accesoryPhoto,
  setAccesoryPhoto,
  setAccesoryDescription,
  loginHandler,
}) => {
  return (
    <div className={style.adNewAccesoryContainer}>
      <Header />
      <Img accesoryPhoto={accesoryPhoto} />
      <PhotoInput setAccesoryPhoto={setAccesoryPhoto} />
      <NameInput setAccesoryName={setAccesoryName} />
      <DescriptionTextarea setAccesoryDescription={setAccesoryDescription} />
      <Button loginHandler={loginHandler} />
    </div>
  );
};

export default AdNewAccesoryMobile;
