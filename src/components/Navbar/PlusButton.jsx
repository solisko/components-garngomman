import React from "react";
import styles from "./Navbar.module.css";

const PlusButton = ({ handlePlusClick }) => {
  return (
    <button onClick={handlePlusClick} className={styles.plusButton}>
      +
    </button>
  );
};
export default PlusButton;
