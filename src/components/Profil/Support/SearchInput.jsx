import React from "react";
import styles from "./Support.module.css";

const SearchInput = () => {
  return (
    <div className={styles.SupportSearchContainer}>
      <form className={styles.SupportSearchForm}>
        <input
          className={styles.SupportSearchInput}
          type="text"
          placeholder="Sök fråga"
        />
      </form>
    </div>
  );
};

export default SearchInput;
