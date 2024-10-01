import React from "react";
import styles from "../Stash.module.css";
import Bgarn from "../../../Assets/Bgarn.png";

const AccesoryList = ({ accesoryList }) => {
  return (
    <div className={styles.listWrapper}>
      {accesoryList.length === 0 ? (
        <p className={styles.emptyMessage}>
          Du har inga tillbehör i din gömma. <br />
          klicka på “+” för att börja lägga till.
        </p>
      ) : (
        <ul className={styles.listContainer}>
          {accesoryList.map((accesory) => (
            <li className={styles.stashList} key={accesory.id}>
              <div>
                <img className={styles.stashListImg} src={Bgarn} alt="" />
                <p className={styles.stashListName}>{accesory.name}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default AccesoryList;
