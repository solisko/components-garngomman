import React from "react";
import styles from "./Navbar.module.css";

const MinProfil = () => {
  return (
    <div className={styles["nav-item"]}>
      <div className={styles.icon}></div>
      <div>Min Profil</div>
    </div>
  );
};
export default MinProfil;
