import React, { useState } from "react";
import RadioBtnGroup from "./RadioBtnGroup";

const Theme = () => {
  const [theme, setTheme] = useState("Ljust");

  return (
    <RadioBtnGroup
      label="Tema"
      options={["Ljust", "Mörkt"]}
      selectedOption={theme}
      onChange={setTheme}
    />
  );
};

export default Theme;
