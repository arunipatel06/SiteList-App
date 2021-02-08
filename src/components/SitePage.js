import React, { useState, useEffect, Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import {
  Grid,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  CircularProgress,
} from "@material-ui/core";
import { useLocation } from "react-router-dom";
import Profile from "../assets/Profile.jpg";
import SitePageNavbar from "./Navbar"

//icons
import PersonIcon from "@material-ui/icons/Person";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import PinDropIcon from "@material-ui/icons/PinDrop";

const useStyles = makeStyles((theme) => ({
  paper: {
    height: "100%",
    width: "100%",
  },
  parent: {
    display: "flex",
    flexDirection: "column",
    margin: "30px auto 20px",
    width: "300px",
  },
  icon: {
    fontSize: "30px",
    width: "10%",
    marginRight: "20px",
  },
  iconAndText: {
    display: "flex",
    flexDirection: "row",
    margin: "10px auto 10px",
  },
  detailsText: {
    fontSize: "20px",
    align: "left",
  },
}));

const SitePage = ({ clientDetails }) => {
  const classes = useStyles();
  const {state} = useLocation();

  const [showDialog, setShowDialog] = useState(true);
  const [siteData, setSiteData] = useState({});

  useEffect(() => {
    if (
      clientDetails !== undefined &&
      Object.keys(clientDetails).length !== 0
    ) {
      setSiteData(clientDetails);
      setShowDialog(false);
    }
    if(
        state !== undefined &&
        Object.keys(state).length !== 0
      ) {
        console.log("State", state);
        setSiteData(state.state);
        setShowDialog(false);
      }
  }, [clientDetails,state]);

  const loadingComponent = (
    <Dialog
      onClose={() => {
        setShowDialog(false);
      }}
      open={showDialog}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title">{"Loading... "}</DialogTitle>
      <DialogContent>
        <div style={{ textAlign: "center", margin: "10px auto" }}>
          <CircularProgress />
        </div>
      </DialogContent>
    </Dialog>
  );
  const site =
    Object.keys(siteData).length !== 0 ? (
      <Paper elevation={1} className={classes.paper}>
        <Grid container>
          <Grid xs={12}>
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
                    {siteData.contacts.main.firstName}{" "}
                    {siteData.contacts.main.lastName}
                  </Typography>
                  <Typography variant="Subtitle">
                    {" "}
                    {siteData.contacts.main.jobTitle}
                  </Typography>
                </div>
              </div>
              <div className={classes.iconAndText}>
                <PhoneIcon disableElevation={true} className={classes.icon} />
                <Typography className={classes.detailsText}>
                  {siteData.contacts.main.phoneNumber}
                </Typography>
              </div>
              <div className={classes.iconAndText}>
                <EmailIcon disableElevation={true} className={classes.icon} />
                <Typography className={classes.detailsText}>
                  {siteData.contacts.main.email}
                </Typography>
              </div>
              <div className={classes.iconAndText}>
                <PinDropIcon disableElevation={true} className={classes.icon} />
                <Typography className={classes.detailsText}>
                  {siteData.contacts.main.address.street}
                </Typography>
              </div>
            </div>
          </Grid>
        </Grid>
      </Paper>
    ) : null;

  return (
    <Fragment>
      <SitePageNavbar />
      {loadingComponent}
      {site}
    </Fragment>
  );
};
export default SitePage;
