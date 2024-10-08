import React from "react";
import StashTab from "./StashTab";
import styles from "./Stash.module.css";

const Tabs = ({
  title1,
  title2,
  title3,
  title4,
  btnClassName,
  tabBtnContainerclassName,
  handleClick,
}) => {
  return (
    <div>
      <div className={`${styles.tabBtnContainer} ${tabBtnContainerclassName}`}>
        <StashTab
          className={`${styles.tabBtn} ${btnClassName}`}
          title={title1}
          handleClick={() => handleClick(title1)}
        />
        <StashTab
          className={`${styles.tabBtn} ${btnClassName}`}
          title={title2}
          handleClick={() => handleClick(title2)}
        />
        <StashTab
          className={`${styles.tabBtn} ${btnClassName}`}
          title={title3}
          handleClick={() => handleClick(title3)}
        />
        <StashTab
          className={`${styles.tabBtn} ${btnClassName}`}
          title={title4}
          handleClick={() => handleClick(title4)}
        />
      </div>
    </div>
  );
};
export default Tabs;
