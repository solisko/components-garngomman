import React from "react";
import styles from "./Gdpr.module.css";
import GdprText from "./GdprText";
import GdprBtn from "./GdprBtn";

const Gdpr = () => {
  return (
    <div className={styles.GdprContainer}>
      <h2>GDPR</h2>
      <GdprText />
      <GdprBtn />
    </div>
  );
};

export default Gdpr;
