import React, { useState, createContext, useEffect } from "react";
import fetchSiteList from "../api/siteLists";
import allSiteLists from "../api/siteLists";
export const SiteListContext = createContext();

export const SiteListProvider = (props) => {
  const [siteDetails, setSiteDetails] = useState([]);
  const [clientDetails, setClientDetails] = useState({});

  useEffect(() => {
    allSiteLists().then((response) => {
      setSiteDetails(response);
    });
  }, []);

  return (
    <SiteListContext.Provider
      value={{
        sites: [siteDetails, setSiteDetails],
        client: [clientDetails, setClientDetails],
      }}
    >
      {props.children}
    </SiteListContext.Provider>
  );
};
