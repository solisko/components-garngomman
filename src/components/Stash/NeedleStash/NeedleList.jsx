import React, { useState } from "react";
import needleData from "../needleData.json";
import styles from "../Stash.module.css";
import Bgarn from "../../../Assets/Bgarn.png";

const NeedleList = () => {
  const [needleList, setNeedleList] = useState(needleData);

  return (
    <div>
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
    </div>
  );
};
export default NeedleList;
