import React from "react";
import StashList from "./StashList";
import yarnData from "./yarndata.json";
import needleData from "./needleData.json";
import accesoryData from "./accesoryData.json";

export default {
  title: "COMPONENTS/Stash/StashList/StashList",
  component: StashList,
};

export const Default = () => (
  <StashList stashList={[...yarnData, ...needleData, ...accesoryData]} />
);

export const EmptyList = () => <StashList stashList={[]} />;
