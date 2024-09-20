import React from "react";
import styles from "./Profil.module.css";

const Profil = () => {
  return (
    <div className={styles.profilcontainer}>
      <h2>Profil</h2>
      <div className={styles.profilbtn}>
        <button>Kontoinställningar</button>
        <button>Personinställningar</button>
        <button>Support</button>
        <button>GDPR</button>
        <button>Medlemskap</button>
        <button>Preferenser</button>
      </div>
    </div>
  );
};

export default Profil;
