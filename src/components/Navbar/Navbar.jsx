import React from "react";
import styles from "./Navbar.module.css";
import PlusButton from "./PlusButton";
import MinaProjekt from "./MinaProjekt";
import Inspo from "./Inspo";
import MinProfil from "./MinProfil";
import Community from "./Community";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <MinaProjekt />
      <Inspo />
      <PlusButton />
      <Community />
      <MinProfil />
    </div>
  );
};
export default Navbar;
