import React from "react";
import Bgarn from "../../Assets/Bgarn.png";
import styles from "./Stash.module.css";

const StashList = ({ stashList }) => {
  const renderItemDetails = (item) => {
    switch (item.category) {
      case "yarn":
        return <p>{item.weight} gram</p>;
      case "needle":
        return <p>{item.diameter} mm</p>;
      case "accesory":
      default:
        return null;
    }
  };

  return (
    <div className={styles.listWrapper}>
      {stashList.length === 0 ? (
        <p className={styles.emptyMessage}>
          Du har inga garn, nålar eller tillbehör i din gömma. <br />
          Klicka på “+” för att börja lägga till.
        </p>
      ) : (
        <ul className={styles.listContainer}>
          {stashList.map((item, idx) => (
            <li className={styles.stashList} key={idx}>
              <div>
                <img
                  className={styles.stashListImg}
                  src={Bgarn}
                  alt={item.name}
                />
                <p className={styles.stashListName}>{item.name}</p>
                {renderItemDetails(item)}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default StashList;
