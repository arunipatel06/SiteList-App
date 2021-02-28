/* eslint-disable no-restricted-globals */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, Fragment } from "react";
import {
  Grid,
  Paper,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  CircularProgress,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import PersonIcon from "@material-ui/icons/Person";
import ImageIcon from "@material-ui/icons/Image";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import PinDropIcon from "@material-ui/icons/PinDrop";
import Navbar from "../Nav/Navbar";

import { useLocation } from "react-router-dom";
import Profile from "./Profile.jpg";
import { useStyles } from "./SiteJss";

const SitePage = ({ clientDetails }) => {
  const classes = useStyles();
  const matches = useMediaQuery("(min-width:1280px)");
  const { state } = useLocation();

  const [showDialog, setShowDialog] = useState(true);
  const [site, setSiteData] = useState();

  useEffect(() => {
    if (
      clientDetails !== undefined &&
      Object.keys(clientDetails).length !== 0
    ) {
      setSiteData(clientDetails);
      setShowDialog(false);
    }
    // if (state !== undefined && Object.keys(state).length !== 0) {
    //   setSiteData(state.state);
    //   setShowDialog(false);
    // }
  }, [clientDetails]);

  useEffect(() => {
    if (matches) {
      setSiteData(clientDetails);
      setShowDialog(false);
    } else {
      setSiteData(location.state);
      setShowDialog(false);
    }
  }, [matches]);

  const loadingComponent = (
    <Dialog
      onClose={() => {
        setShowDialog(false);
      }}
      open={showDialog}
    >
      <DialogTitle>{"Loading... "}</DialogTitle>
      <DialogContent>
        <div className={classes.circularDialog}>
          <CircularProgress />
        </div>
      </DialogContent>
    </Dialog>
  );
  const desktopSite =
    Object.keys(site).length !== 0 ? (
      <Paper elevation={1}>
        <Grid container>
          <Grid xs={12}>
            <div>
              <img
                alt="ProfileImage"
                className={classes.image}
                src={Profile}
              ></img>
            </div>

            <div className={classes.parent}>
              <div className={classes.iconAndText}>
                <PersonIcon disableElevation={true} className={classes.icon} />
                <div>
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
      </Paper>
    ) : null;

  // const mobileSite = Object.keys(site).length !== 0 && (
  //   <Grid container>
  //     <Grid xs={12}>
  //       <div style={{ borderBottom: "1px solid black" }}>
  //         <Navbar />
  //       </div>
  //       <List>
  //         <ListItem>
  //           <IconButton
  //             edge="start"
  //             className={classes.mobileBackIcon}
  //             onClick={() => history.goBack()}
  //           >
  //             <ArrowBackIosIcon />
  //           </IconButton>
  //           <ListItemIcon>
  //             <ImageIcon className={classes.imageIcon} />
  //           </ListItemIcon>
  //           <ListItemText
  //             primary={<div style={{ color: "#ffffff" }}>{site.title}</div>}
  //             secondary={
  //               <div style={{ color: "#000000" }}>
  //                 {site.address.city}, {site.address.country}
  //                 {site.contacts.main.phoneNumber}
  //               </div>
  //             }
  //           />
  //         </ListItem>
  //       </List>
  //       <div>
  //         <img alt="ProfileImage" className={classes.image} src={Profile}></img>
  //       </div>
  //       <div className={classes.parent}>
  //         <div className={classes.iconAndText}>
  //           <PersonIcon disableElevation={true} className={classes.icon} />
  //           <div>
  //             <Typography className={classes.detailsText}>
  //               {site.contacts.main.firstName} {site.contacts.main.lastName}
  //             </Typography>
  //             <Typography variant="Subtitle">
  //               {site.contacts.main.jobTitle}
  //             </Typography>
  //           </div>
  //         </div>
  //         <div className={classes.iconAndText}>
  //           <PhoneIcon disableElevation={true} className={classes.icon} />
  //           <Typography className={classes.detailsText}>
  //             {site.contacts.main.phoneNumber}
  //           </Typography>
  //           <EmailIcon disableElevation={true} className={classes.icon} />
  //           <Typography className={classes.detailsText}>
  //             {site.contacts.main.email}
  //           </Typography>
  //           <PinDropIcon disableElevation={true} className={classes.icon} />
  //           <Typography className={classes.detailsText}>
  //             {site.contacts.main.address.street}
  //           </Typography>
  //         </div>
  //       </div>
  //     </Grid>
  //   </Grid>
  // );

  return (
    <Fragment>
      {loadingComponent}
      {desktopSite}
    </Fragment>
  );
};
export default SitePage;
