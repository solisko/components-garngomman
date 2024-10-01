import React from "react";
import styles from "./Support.module.css";
const SearchInputBtn = () => {
  return (
    <div className={styles.SupportBtnContainer}>
      <button className={styles.SupportButton}>Sök</button>
    </div>
  );
};

export default SearchInputBtn;
