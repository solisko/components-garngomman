import React from "react";
import FirstName from "./FirstName";
import LastName from "./LastName";
import ZipCode from "./ZipCode";
import PhoneNumber from "./PhoneNumber";
import Email from "./Email";
import Adress from "./Adress";
import City from "./City";
import PersonSetButton from "./PersonSetButton";

const PersonSettings = () => {
  return (
    <div>
      <h2>Personinställningar</h2>
      <FirstName />
      <LastName />
      <Adress />
      <ZipCode />
      <City />
      <PhoneNumber />
      <Email />
      <PersonSetButton />
    </div>
  );
};

export default PersonSettings;
