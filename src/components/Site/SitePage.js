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
} from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import PinDropIcon from "@material-ui/icons/PinDrop";
import Profile from "./Profile.jpg";
import { useStyles } from "./SiteJss";

const SitePage = ({ clientDetails }) => {
  const classes = useStyles();
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
  }, [clientDetails]);

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
  const desktopSite = site && (
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
  );
  return (
    <Fragment>
      {loadingComponent}
      {desktopSite}
    </Fragment>
  );
};
export default SitePage;
