import React from "react";
import styles from "./Stash.module.css";

const StashTab = ({ title, className, handleClick }) => {
  return (
    <div>
      <button onClick={handleClick} className={`${styles.tabBtn} ${className}`}>{title}</button>
    </div>
  );
};
export default StashTab;
