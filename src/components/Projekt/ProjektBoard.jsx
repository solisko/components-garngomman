import React from "react";
import styles from "./Projekt.module.css";
import EmptyBoard from "./EmptyBoard";

const ProjektBoard = () => {
  return (
    <div className={styles.projektContainer}>
      <EmptyBoard />
    </div>
  );
};
export default ProjektBoard;
