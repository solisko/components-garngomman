import React from "react";
import styles from "./AccountSettings.module.css";

const AccountSettings = () => {
  return (
    <div className={styles.accountcontainer}>
      <h2>Kontoinställningar</h2>
      <form className={styles.accountform}>
        <input
          className={styles.accountinput}
          type="text"
          placeholder="Användarnamn"
        />
        <input
          className={styles.accountinput}
          type="text"
          placeholder="Lösenord"
        />
        <input
          className={styles.accountinput}
          type="text"
          placeholder="E-postadress"
        />
        <button className={styles.accountbtn}>Spara</button>
      </form>
    </div>
  );
};

export default AccountSettings;
