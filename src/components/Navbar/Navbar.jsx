import React from "react";
import styles from "./Navbar.module.css";
import PlusButton from "./PlusButton";
import NavButton from "./NavButton";
import MinaProjektIcon from "./MinaProjektIcon";
import InspoIcon from "./InspoIcon";
import CommunityIcon from "./CommunityIcon";
import MinProfilIcon from "./MinProfilIcon";

const Navbar = ({ handleClick }) => {
  return (
    <div className={styles.navbar}>
      <NavButton
        handleClick={handleClick}
        title="Mina Projekt"
        icon={<MinaProjektIcon />}
      />
      <NavButton handleClick={handleClick} title="Inspo" icon={<InspoIcon />} />
      <PlusButton handleClick={handleClick} />
      <NavButton
        handleClick={handleClick}
        title="Community"
        icon={<CommunityIcon />}
      />
      <NavButton
        handleClick={handleClick}
        title="Min Profil"
        icon={<MinProfilIcon />}
      />
    </div>
  );
};
export default Navbar;
