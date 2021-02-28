// import React, { useState, createContext } from "react";
// import fetchSiteList from "../api/siteLists";

// export const SiteListContext = createContext();

// export const SiteListProvider = (props) => {
//   const [allSiteList, setAllSiteLists] = useState([]);

//   const fetchSites = () => {
//     fetchSiteList().then((lists) => {
//       setAllSiteLists(lists);
//     });
//   };
//   fetchSites();
//   return <SiteListContext.Provider>{props.children}</SiteListContext.Provider>;
// };
