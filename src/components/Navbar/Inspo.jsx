import React from "react";
import styles from "./Navbar.module.css";

const Inspo = () => {
  return (
    <div className={styles["nav-item"]}>
      <div className={styles.icon}></div>
      <div>Inspo</div>
    </div>
  );
};
export default Inspo;
