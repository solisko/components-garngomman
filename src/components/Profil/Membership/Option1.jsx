import React from "react";
import styles from "./Membership.module.css";

const Option1 = () => {
  return (
    <div className={styles.OptionContainer}>
      <form className={styles.MembershipForm}>
        <label className={styles.MembershipLabel}>
          <input
            className={styles.MembershipInput}
            type="radio"
            name="membership"
          />
          <span className={styles.RadioText}>Garngömman Pro</span>
        </label>
      </form>
    </div>
  );
};

export default Option1;
