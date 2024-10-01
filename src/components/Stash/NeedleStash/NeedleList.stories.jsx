import React from "react";
import NeedleList from "./NeedleList";
import needleData from "../needleData.json";

export default {
  title: "COMPONENTS/Stash/NeedleStash/NeedleList",
  component: NeedleList,
};

export const Default = () => <NeedleList needleList={needleData} />;

export const EmptyList = () => <NeedleList needleList={[]} />;
