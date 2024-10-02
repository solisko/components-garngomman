import React from "react";
import styles from "./PersonSettings.module.css";

const City = () => {
  return (
    <div className={styles.CityContainer}>
      <form className={styles.CityForm}>
        <input className={styles.CityInput} type="text" placeholder="Ort" />
      </form>
    </div>
  );
};

export default City;
