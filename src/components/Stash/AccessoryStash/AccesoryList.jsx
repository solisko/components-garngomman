import React, { useState } from "react";
import accesoryData from "../accesoryData.json";
import styles from "../Stash.module.css";
import Bgarn from "../../../Assets/Bgarn.png";

const AccesoryList = () => {
  const [accesoryList, setAccesoryList] = useState(accesoryData);

  return (
    <div className={styles.listWrapper}>
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
    </div>
  );
};
export default AccesoryList;
