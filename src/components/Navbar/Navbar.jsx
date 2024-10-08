import React from "react";
import styles from "./Navbar.module.css";
import PlusButton from "./PlusButton";
import NavButton from "./NavButton";
import MinaProjektIcon from "./MinaProjektIcon";
import CommunityIcon from "./CommunityIcon";
import MinProfilIcon from "./MinProfilIcon";
import StashIcon from "./StashIcon";

const Navbar = ({ handleClick, handlePlusClick }) => {
  return (
    <div className={styles.navbar}>
      <NavButton
        handleClick={handleClick}
        title="Mina Projekt"
        icon={<MinaProjektIcon />}
      />
      <NavButton
        handleClick={handleClick}
        title="Mönster"
        icon={<PatternsIcon />}
      />
      <PlusButton handleClick={handlePlusClick} />
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
