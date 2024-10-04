import React from "react";
import styles from "./Projekt.module.css";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import ProjektBoard from "./ProjektBoard";
import StashTab from "../Stash/StashTab";

const Projekt = () => {
  return (
    <div>
      <Header />
      <StashTab />
      <ProjektBoard />
      <Navbar />
    </div>
  );
};
export default Projekt;
