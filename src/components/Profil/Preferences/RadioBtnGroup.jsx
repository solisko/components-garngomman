import React from "react";
import styles from "./Preferences.module.css";

const RadioBtnGroup = ({ label, options = [], selectedOption, onChange }) => {
  return (
    <div className={styles.RadioBtnGroupContainer}>
      <h4 className={styles.RadioBtnLabel}>{label}</h4>
      <div className={styles.OptionPairsContainer}>
        {options.map((option) => (
          <div key={option} className={styles.OptionPair}>
            <label className={styles.RadioBtns}>
              <input
                type="radio"
                value={option}
                checked={selectedOption === option}
                onChange={() => onChange(option)}
              />
              {option}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RadioBtnGroup;
