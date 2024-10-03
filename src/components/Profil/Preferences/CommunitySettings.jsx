import React, { useState } from "react";
import RadioBtnGroup from "./RadioBtnGroup";

const CommunitySettings = () => {
  const [communitySettings, setCommunitySettings] = useState("Publikt");

  return (
    <RadioBtnGroup
      label="Community"
      options={["Publikt", "Privat"]}
      selectedOption={communitySettings}
      onChange={setCommunitySettings}
    />
  );
};

export default CommunitySettings;
