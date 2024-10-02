import React from "react";
import styles from "./Stash.module.css";

const StashFlikar = ({ title, className }) => {
  return (
    <div>
      <button className={`${styles.tabBtn} ${className}`}>{title}</button>
    </div>
  );
};
export default StashFlikar;
