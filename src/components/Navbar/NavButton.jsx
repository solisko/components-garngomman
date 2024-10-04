import React from "react";
import styles from "./Navbar.module.css";

const NavButton = ({ title, icon }) => {
  return (
    <button className={styles.navItem}>
      <div className={styles.navIcon}>{icon}</div>
      <div className={styles.navTitle}>{title}</div>
    </button>
  );
};
export default NavButton;
