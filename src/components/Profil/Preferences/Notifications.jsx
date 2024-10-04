import React, { useState } from "react";
import RadioBtnGroup from "./RadioBtnGroup";

const Notifications = () => {
  const [notifications, setNotifications] = useState("På");
  return (
    <RadioBtnGroup
      label="Notiser"
      options={["På", "Av"]}
      selectedOption={notifications}
      onChange={setNotifications}
    />
  );
};

export default Notifications;
