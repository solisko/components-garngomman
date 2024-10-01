import React from "react";
import YarnList from "./YarnList";
import yarnData from "../yarndata.json";

export default {
  title: "COMPONENTS/Stash/YarnStash/YarnList",
  component: YarnList,
};

export const Default = () => <YarnList yarnList={yarnData} />;

export const EmptyList = () => <YarnList yarnList={[]} />;
