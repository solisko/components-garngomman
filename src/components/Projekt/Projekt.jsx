import React from "react";
import styles from "./Projekt.module.css"
import StashFlikar from "../Stash/StashFlikar";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar"
import ProjektBoard from "./ProjektBoard";

const Projekt = () => {
  return <div>
    <Header/>
    <StashFlikar/>
    <ProjektBoard/>
    <Navbar/>
  </div>;
};
export default Projekt;
