import React from "react";
import styles from "./Navbar.module.css";

const NavButton = ({ title, icon, handleClick }) => {
  return (
    <button onClick={handleClick} className={styles.navItem}>
      <div className={styles.navIcon}>{icon}</div>
      <div className={styles.navTitle}>{title}</div>
    </button>
  );
};
export default NavButton;
