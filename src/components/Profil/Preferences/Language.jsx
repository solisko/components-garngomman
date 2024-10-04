import React, { useState } from "react";
import styles from "./Preferences.module.css";

const Language = () => {
  const [language, setLanguage] = useState("Svenska");

  return (
    <div className={styles.LanguageContainer}>
      <h4 className={styles.LanguageHeading}>Välj språk</h4>
      <select value={language} onChange={(e) => setLanguage(e.target.value)}>
        <option value="Svenska">Svenska</option>
        <option value="Svenska">Engelska</option>
        <option value="Svenska">Spanska</option>
      </select>
    </div>
  );
};

export default Language;
