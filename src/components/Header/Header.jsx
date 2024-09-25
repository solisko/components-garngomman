import React from "react";
import styles from "./Header.module.css";
import Logo1 from "../Logos/Logo1";

const Header = () => {
  return (
    <div className={styles.header}>
      <Logo1 />
    </div>
  );
};
export default Header;
