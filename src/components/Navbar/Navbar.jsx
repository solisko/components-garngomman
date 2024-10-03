import React from "react";
import styles from "./Navbar.module.css";
import PlusButton from "./PlusButton";
import NavButton from "./NavButton";
import MinaProjektIcon from "./MinaProjektIcon";
import InspoIcon from "./InspoIcon";
import CommunityIcon from "./CommunityIcon";
import MinProfilIcon from "./MinProfilIcon";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <NavButton title="Mina Projekt" icon={<MinaProjektIcon/>}/>
      <NavButton title="Inspo" icon={<InspoIcon/>}/>
      <PlusButton />
      <NavButton title="Community" icon={<CommunityIcon/>}/>
      <NavButton title="Min Profil" icon={<MinProfilIcon/>}/>

    </div>
  );
};
export default Navbar;
