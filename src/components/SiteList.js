import React, { useState, useEffect } from "react";
import fetchSiteList from "../dataSources/siteList";
import { makeStyles } from "@material-ui/core/styles";

//list
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

//icons
import ImageIcon from "@material-ui/icons/Image";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 300,
    alignItems: "left",
    backgroundColor: theme.palette.background.paper,
    position: 'fixed',
    overflow: 'auto',
    maxHeight: 700,
  },
  list: {
    "&:hover": { color: "black", backgroundColor: "#b2d2f7" },
  },
  selectedItem: {
    color: "#5e5f63",
    backgroundColor: "#fcd8b1",
    borderRight: "4px solid #2b68d6",
  },
  arrowIcon: {
    marginLeft: "8px",
  },
  button:{
    fontSize:"15px",
    fontStyle:"bold",
    margin: "auto",
    borderRadius: "25px",
    padding: "7px 45px",
    textTransform: "none",
    "&:hover": { color: "white", backgroundColor: "#b2d2f7" },
    color: "#5e5f63",
    backgroundColor: "#dbdbdb",
    border: "none",
    outline:"none",
  }
}));

const SiteList = ({ setClientDetails }) => {
  const classes = useStyles();

  const [siteDetails, setSiteDetails] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentSiteList, setCurrentSiteList] = useState([]);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedSitesData = await fetchSiteList();
      setSiteDetails(fetchedSitesData);
    };
    fetchData();
  }, []);

  useEffect(() => {
    setCurrentSiteList(
      siteDetails.slice((currentPage - 1) * 10, currentPage * 10)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [siteDetails, currentPage]);

  useEffect(() => {
    setClientDetails(currentSiteList[selectedIndex]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSiteList, selectedIndex]);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <div className={classes.root}>
      <List>
        {currentSiteList.length !== 0
          ? currentSiteList.map((site, index) => (
              <ListItem
                className={
                  selectedIndex === index ? classes.selectedItem : classes.list
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
                      <div>
                        {site.address.city}, {site.address.country}
                      </div>
                      <div>{site.contacts.main.phoneNumber}</div>
                    </div>
                  }
                />
                <ListItemSecondaryAction>
                  <ArrowForwardIosIcon />
                </ListItemSecondaryAction>
              </ListItem>
            ))
          : null}
      </List>
        <button
        className={classes.button}
          onClick={() => {
            setCurrentPage(currentPage + 1);
            setSelectedIndex(0);
          }}
        >
          Next Page &gt;&gt;
        </button>
      </div>
  );
};

export default SiteList;
