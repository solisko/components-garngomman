import React from "react";
import styles from "./Profil.module.css";

const Profil = ({ handleClick }) => {
  return (
    <div className={styles.profilcontainer}>
      <h2>Profil</h2>
      <div className={styles.btncontainer}>
        <button onClick={handleClick} className={styles.profilbtn}>
          Kontoinställningar
        </button>
        <button onClick={handleClick} className={styles.profilbtn}>
          Personinställningar
        </button>
        <button onClick={handleClick} className={styles.profilbtn}>
          Support
        </button>
        <button onClick={handleClick} className={styles.profilbtn}>
          GDPR
        </button>
        <button onClick={handleClick} className={styles.profilbtn}>
          Medlemskap
        </button>
        <button onClick={handleClick} className={styles.profilbtn}>
          Preferenser
        </button>
      </div>
    </div>
  );
};

export default Profil;
