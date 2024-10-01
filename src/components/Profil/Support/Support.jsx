import React from "react";
import ContactInfo from "./ContactInfo";
import FAQ from "./FAQ";
import SearchInput from "./SearchInput";
import SearchInputBtn from "./SearchInputBtn";

const Support = () => {
  return (
    <div>
      <h2>Support</h2>
      <SearchInput />
      <SearchInputBtn />
      <FAQ />
      <ContactInfo />
    </div>
  );
};

export default Support;
