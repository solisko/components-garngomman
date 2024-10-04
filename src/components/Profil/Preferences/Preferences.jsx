import React from "react";
import Theme from "./Theme";
import Notifications from "./Notifications";
import CommunitySettings from "./CommunitySettings";
import Language from "./Language";
import PreferenceBtn from "./PreferenceBtn";
import styles from "./Preferences.module.css";

const Preferences = () => {
  return (
    <div>
      <h2 className={styles.PreferencesHeading}>Mina preferenser</h2>
      <div className={styles.PreferencesContainer}>
        <Theme />
        <Notifications />
        <CommunitySettings />
        <Language />
        <PreferenceBtn />
      </div>
    </div>
  );
};

export default Preferences;
