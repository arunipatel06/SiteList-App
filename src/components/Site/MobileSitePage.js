/* eslint-disable */
import React, { useState, useEffect, Fragment } from "react";
import {
  Grid,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ImageIcon from "@material-ui/icons/Image";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import PinDropIcon from "@material-ui/icons/PinDrop";
import Navbar from "../Nav/Navbar";
import { useLocation, useHistory } from "react-router-dom";
import Profile from "./Profile.jpg";
import { useStyles } from "./SiteJss";

const MobileSitePage = () => {
  const location = useLocation();
  const classes = useStyles();
  let history = useHistory();
  const [site, setSiteData] = useState(location.state);

  const mobileSite = Object.keys(site).length !== 0 && (
    <Grid container>
      <Grid xs={12}>
        <div style={{ borderBottom: "1px solid black" }}>
          <Navbar />
        </div>
        <List className={classes.mobileList}>
          <ListItem>
            <IconButton
              edge="start"
              className={classes.mobileBackIcon}
              onClick={() => history.goBack()}
            >
              <ArrowBackIosIcon />
            </IconButton>
            <ListItemIcon>
              <ImageIcon style={{ color: "#ffffff", fontSize: "30px" }} />
            </ListItemIcon>
            <ListItemText
              primary={<div style={{ color: "#ffffff" }}>{site.title}</div>}
              secondary={
                <div style={{ color: "#000000" }}>
                  <div>
                    {site.address.city}, {site.address.country}
                  </div>
                  <div>{site.contacts.main.phoneNumber}</div>
                </div>
              }
            />
          </ListItem>
        </List>
        <div>
          <img
            alt="ProfileImage"
            width="100%"
            height="100%"
            src={Profile}
          ></img>
        </div>

        <div className={classes.parent}>
          <div className={classes.iconAndText}>
            <PersonIcon disableElevation={true} className={classes.icon} />
            <div style={{ textAlign: "left" }}>
              <Typography className={classes.detailsText}>
                {site.contacts.main.firstName} {site.contacts.main.lastName}
              </Typography>
              <Typography variant="Subtitle">
                {site.contacts.main.jobTitle}
              </Typography>
            </div>
          </div>
          <div className={classes.iconAndText}>
            <PhoneIcon disableElevation={true} className={classes.icon} />
            <Typography className={classes.detailsText}>
              {site.contacts.main.phoneNumber}
            </Typography>
          </div>
          <div className={classes.iconAndText}>
            <EmailIcon disableElevation={true} className={classes.icon} />
            <Typography className={classes.detailsText}>
              {site.contacts.main.email}
            </Typography>
          </div>
          <div className={classes.iconAndText}>
            <PinDropIcon disableElevation={true} className={classes.icon} />
            <Typography className={classes.detailsText}>
              {site.contacts.main.address.street}
            </Typography>
          </div>
        </div>
      </Grid>
    </Grid>
  );

  return <Fragment>{mobileSite}</Fragment>;
};

export default MobileSitePage;
