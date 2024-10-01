import React from "react";
import styles from "../Stash.module.css";
import Bgarn from "../../../Assets/Bgarn.png";

const YarnList = ({ yarnList }) => {
  return (
    <div className={styles.listWrapper}>
      {yarnList.length === 0 ? (
        <p className={styles.emptyMessage}>
          Du har inga garn i din gömma. <br />
          klicka på “+” för att börja lägga till.
        </p>
      ) : (
        <ul className={styles.listContainer}>
          {yarnList.map((yarn) => (
            <li className={styles.stashList} key={yarn.id}>
              <div>
                <img className={styles.stashListImg} src={Bgarn} alt="" />
                <p className={styles.stashListName}>{yarn.name}</p>
                <p>{yarn.weight} gram</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default YarnList;
