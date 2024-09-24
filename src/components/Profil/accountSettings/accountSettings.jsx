import React from "react";
import EmailSetting from "./EmailSetting";
import PasswordSetting from "./PasswordSetting";
import UsernameSetting from "./UsernameSetting";
import styles from "./AccountSettings.module.css";
import SettingsButton from "./SettingsButton";

const AccountSettings = () => {
  return (
    <div className={styles.accountcontainer}>
      <UsernameSetting />
      <EmailSetting />
      <PasswordSetting />
      <SettingsButton />
    </div>
  );
};

export default AccountSettings;
