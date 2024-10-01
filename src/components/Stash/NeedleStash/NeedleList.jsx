import React from "react";
import styles from "../Stash.module.css";
import Bgarn from "../../../Assets/Bgarn.png";

const NeedleList = ({ needleList }) => {
  return (
    <div className={styles.listWrapper}>
      {needleList.length === 0 ? (
        <p className={styles.emptyMessage}>
          Du har inga tillbehör i din gömma. <br />
          klicka på “+” för att börja lägga till.
        </p>
      ) : (
        <ul className={styles.listContainer}>
          {needleList.map((needle) => (
            <li className={styles.stashList} key={needle.id}>
              <div>
                <img className={styles.stashListImg} src={Bgarn} alt="" />
                <p className={styles.stashListName}>{needle.name}</p>
                <p>{needle.diameter} mm</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default NeedleList;
