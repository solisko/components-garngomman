import React from "react";
import Button from "./Button";
import Header from "./Header";
import DescriptionTextarea from "./DescriptionTextarea";
import Img from "./Img";
import YarnLength from "./YarnLength";
import YarnWeight from "./YarnWeight";
import YarnThickness from "./YarnThickness";
import YarnMaterial from "./YarnMaterial";

const AdNewYarn = () => {
  return (
    <div>
      <Header />
      <Img />
      <YarnLength />
      <YarnWeight />
      <YarnThickness />
      <YarnMaterial />
      <DescriptionTextarea />
      <Button />
    </div>
  );
};

export default AdNewYarn;
