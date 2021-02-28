/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, Fragment } from "react";
import { useStyles } from "./SiteListJss";
import { Link } from "react-router-dom";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import allSiteLists from "../../api/siteLists";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

import ImageIcon from "@material-ui/icons/Image";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const SiteList = ({ setClientDetails }) => {
  const classes = useStyles();
  const matches = useMediaQuery("(min-width:1280px)");

  const [siteDetails, setSiteDetails] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPageLists, setCurrentPageLists] = useState([]);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const clickNextPage = () => {
    setCurrentPage(currentPage + 1);
    setSelectedIndex(0);
  };

  useEffect(() => {
    allSiteLists().then((response) => {
      setSiteDetails(response);
    });
  }, []);

  useEffect(() => {
    setCurrentPageLists(
      siteDetails.slice((currentPage - 1) * 10, currentPage * 10)
    );
  }, [siteDetails, currentPage]);

  useEffect(() => {
    setClientDetails(currentPageLists[selectedIndex]);
  }, [currentPageLists, selectedIndex]);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const mobileView = (
    <div className={classes.root}>
      <List>
        {currentPageLists.length !== 0 &&
          currentPageLists.map((site, index) => (
            <ListItem
              className={
                selectedIndex === index ? classes.itemSelected : classes.list
              }
              button
              selected={selectedIndex === index}
              onClick={(event) => handleListItemClick(event, index)}
            >
              <ListItemIcon>
                <ImageIcon />
              </ListItemIcon>
              <ListItemText
                primary={site.title}
                secondary={
                  <div>
                    {site.address.city}, {site.address.country}
                    {site.contacts.main.phoneNumber}
                  </div>
                }
              />
              <Link
                to={{
                  pathname: `/site/${currentPageLists[index].id}`,
                  state: currentPageLists[index],
                }}
              >
                {/* <button>Click Me </button> */}
                <ListItemSecondaryAction>
                  <ArrowForwardIosIcon />
                </ListItemSecondaryAction>
              </Link>
            </ListItem>
            // </Link>
          ))}
      </List>
      <button
        className={classes.button}
        onClick={() => {
          clickNextPage();
        }}
      >
        Next Page &gt;&gt;
      </button>
    </div>
  );

  return <Fragment>{mobileView}</Fragment>;
};

export default SiteList;
