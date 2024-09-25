import React from "react";
import styles from "./Membership.module.css";

const Option3 = () => {
  return (
    <div className={styles.OptionContainer}>
      <form className={styles.MembershipForm}>
        <label className={styles.MembershipLabel}>
          <input
            className={styles.MembershipInput}
            type="radio"
            name="membership"
          />
          <span className={styles.RadioText}>Garngömman Standard</span>
        </label>
      </form>
    </div>
  );
};

export default Option3;
