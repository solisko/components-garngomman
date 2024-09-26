import React, { useState } from "react";
import yarnData from "./yarndata.json";
import needleData from "./needleData.json";
import accesoryData from "./accesoryData.json";
import Bgarn from "../../Assets/Bgarn.png";
import styles from "./Stash.module.css";

const StashList = () => {
  const [stashList, setStashList] = useState([
    ...yarnData,
    ...needleData,
    ...accesoryData,
  ]);

  return (
    <div className={styles.listWrapper}>
      <ul className={styles.listContainer}>
        {stashList.map((item, idx) => (
          <li className={styles.stashList} key={idx}>
            <div>
              <img className={styles.stshListImg} src={Bgarn} alt="" />
              <p className={styles.stashListName}>{item.name}</p>

              {item.category === "yarn" && (
                <>
                  <p>{item.weight} gram</p>
                </>
              )}
              {item.category === "needle" && (
                <>
                  <p>{item.diameter} mm</p>
                </>
              )}
              {item.category === "accesory" && <></>}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default StashList;
