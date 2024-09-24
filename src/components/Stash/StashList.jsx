import React, { useState } from "react";
import yarnData from "./yarn-data.json";
import needleData from "./needleData.json";
import accesoryData from "./accesoryData.json";

const StashList = () => {
  const [stashList, setStashList] = useState([
    ...yarnData,
    ...needleData,
    ...accesoryData,
  ]);

  return (
    <div>
      <ul>
        {stashList.map((item) => (
          <li>
            <div>
              <img src="" alt="" />
              <p></p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default StashList;
