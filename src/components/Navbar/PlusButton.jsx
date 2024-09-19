import React from "react";
import styles from "./Navbar.module.css";

const PlusButton = () => {
  return (
    <div className={styles["nav-item"]}>
      <button className={styles["icon-add"]}>+</button>
    </div>
  );
};
export default PlusButton;
