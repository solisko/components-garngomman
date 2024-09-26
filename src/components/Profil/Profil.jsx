import React from "react";
import styles from "./Profil.module.css";

const Profil = () => {
  return (
    <div className={styles.profilcontainer}>
      <h2>Profil</h2>
      <div className={styles.btncontainer}>
        <button className={styles.profilbtn}>Kontoinställningar</button>
        <button className={styles.profilbtn}>Personinställningar</button>
        <button className={styles.profilbtn}>Support</button>
        <button className={styles.profilbtn}>GDPR</button>
        <button className={styles.profilbtn}>Medlemskap</button>
        <button className={styles.profilbtn}>Preferenser</button>
      </div>
    </div>
  );
};

export default Profil;
