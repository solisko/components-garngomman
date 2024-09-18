import React from "react";
import styles from "./Profil.module.css";

const Profil = () => {
  return (
    <div className={styles.container}>
      <h2>Profil</h2>
      <button>Kontoinställningar</button>
      <button>Personinställningar</button>
      <button>Support</button>
      <button>GDPR</button>
      <button>Medlemskap</button>
      <button>Preferenser</button>
    </div>
  );
};

export default Profil;
