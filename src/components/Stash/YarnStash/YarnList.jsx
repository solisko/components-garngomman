import React, { useState } from "react";
import yarnData from "../yarndata.json";
import styles from "../Stash.module.css";
import Bgarn from "../../../Assets/Bgarn.png";

const YarnList = () => {
  const [yarnList, setYarnList] = useState(yarnData);

  return (
    <div>
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
    </div>
  );
};
export default YarnList;
