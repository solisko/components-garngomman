import React, { useState } from "react";
import styles from "./Community.module.css";
import SearchBar from "./SearchBar";
import Inspo from "./Inspo";
import AvatarUser from "./AvatarUser";
import CommunityBtn from "./CommunityBtn";

const username = "Person Persson";
const avatarUrl = "https://i.pravatar.cc";

const Community = () => {
  const [searchInput, setSearchInput] = useState(""); // Manage search state here
  const [numToShow, setNumToShow] = useState(6); // State for controlling the number of results to show

  // Function to handle loading more results
  const onClickHandler = () => {
    setNumToShow((prevNum) => prevNum + 6); // Increase numToShow by 6
  };

  return (
    <div className={styles.container}>
      <AvatarUser username={username} avatarUrl={avatarUrl} />

      <div className={styles["search-bar"]}>
        <SearchBar onChange={(input) => setSearchInput(input)} />
      </div>

      <p className={styles.titleInspo}>Bläddra för inspiration</p>

      <div>
        <Inspo
          className={styles.feed}
          searchInput={searchInput}
          numToShow={numToShow}
        />
      </div>

      <div className={styles["community-btn"]}>
        <CommunityBtn
          onClickHandler={onClickHandler}
          communityBtnTitle={"Visa fler..."}
        />
      </div>
    </div>
  );
};

export default Community;
