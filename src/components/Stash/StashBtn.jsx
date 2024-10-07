import React from "react";
import styles from "./Stash.module.css";

const StashBtn = ({ className }) => {
  return (
    <div>
      <button className={`${styles.newProjectBtn} ${className}`}>
        Starta nytt projekt
      </button>
    </div>
  );
};
export default StashBtn;
