import React from "react";
import Option1 from "./Option1";
import Option2 from "./Option2";
import Option3 from "./Option3";
import MembershipButton from "./MembershipButton";
import styles from "./Membership.module.css";

const Membership = () => {
  return (
    <div className={styles.MembershipContainer}>
      <h2>Välj medlemskap</h2>
      <Option1 />
      <Option2 />
      <Option3 />
      <MembershipButton />
    </div>
  );
};

export default Membership;
