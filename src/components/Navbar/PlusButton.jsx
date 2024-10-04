import React from "react";
import styles from "./Navbar.module.css";

const PlusButton = ({ handleClick }) => {
  return (
    <button onClick={handleClick} className={styles.plusButton}>
      +
    </button>
  );
};
export default PlusButton;
