import React from "react";
import Header from "./Header";
import Img from "./Img";
import DescriptionTextarea from "./DescriptionTextarea";
import PhotoInput from "./PhotoInput";
import NeedleLength from "./NeedleLength";
import NeedleDiameter from "./NeedleDiameter";
import Button from "./Button";

const AdNewNeedle = () => {
  return (
    <div>
      <Header />
      <Img />
      <PhotoInput />
      <NeedleLength />
      <NeedleDiameter />
      <DescriptionTextarea />
      <Button />
    </div>
  );
};

export default AdNewNeedle;
