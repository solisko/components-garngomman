import React from "react";
import styles from "./PersonSettings.module.css";

const Adress = () => {
  return (
    <div className={styles.AdressContainer}>
      <form className={styles.AdressForm}>
        <input
          className={styles.AdressInput}
          type="text"
          placeholder="Adress"
        />
      </form>
    </div>
  );
};

export default Adress;
