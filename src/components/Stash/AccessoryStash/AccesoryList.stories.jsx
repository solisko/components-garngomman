import React from "react";
import AccesoryList from "./AccesoryList";
import accesoryData from "../accesoryData.json";

export default {
  title: "COMPONENTS/Stash/AccessoryStash/AccesoryList",
  component: AccesoryList,
};

export const Default = () => <AccesoryList accesoryList={accesoryData} />;

export const EmptyList = () => <AccesoryList accesoryList={[]} />;
