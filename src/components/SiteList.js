import React, { useState, useEffect } from "react";
import useStyles from "../JssStylesSheets/JssSIteList";
import fetchSiteList from "../dataSources/siteList";

//list
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

//icons
import ImageIcon from "@material-ui/icons/Image";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import IconButton from "@material-ui/core/IconButton";

const SiteList = ({ setSeriesIndex }) => {
  const classes = useStyles();

  const [siteDetails, setSiteDetails] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentSiteList, setCurrentSiteList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedSitesData = await fetchSiteList();
      setSiteDetails(fetchedSitesData);
    };
    fetchData();
  }, []);

  useEffect(() => {
    setCurrentSiteList(siteDetails.slice((currentPage-1)*10,(currentPage*10)));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [siteDetails,currentPage])

  console.log("site:", currentSiteList);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
    setSeriesIndex(index);
  };

  return (
    <div className={classes.root}>
      <List>
        {currentSiteList.length !== 0
          ? currentSiteList.map((site) => (
              <ListItem
                className={
                  selectedIndex === 1 ? classes.selectedItem : classes.list
                }
                button
                selected={selectedIndex === 1}
                onClick={(event) => handleListItemClick(event, 1)}
              >
                <ListItemIcon>
                  <ImageIcon />
                </ListItemIcon>
                <ListItemText
                  primary={site.title}
                  secondary={
                    <div>
                      <div>{site.address.city}, {site.address.country}</div>
                      <div>{site.contacts.main.phoneNumber}</div>
                    </div>
                  }
                />
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="expand">
                    <ArrowForwardIosIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))
          : null}
      </List>
      <div><button onClick= {() => setCurrentPage(currentPage+1)}>Current Page: {currentPage}</button></div>
    </div>
  );
};

export default SiteList;
