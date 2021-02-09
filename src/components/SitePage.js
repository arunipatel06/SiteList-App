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
  IconButton,
} from "@material-ui/core";
import { useLocation, useHistory } from "react-router-dom";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Profile from "../assets/Profile.jpg";
import Navbar from "./Navbar";

//list
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";

//icons
import PersonIcon from "@material-ui/icons/Person";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import PinDropIcon from "@material-ui/icons/PinDrop";
import ImageIcon from "@material-ui/icons/Image";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

const useStyles = makeStyles((theme) => ({
  paper: {
    height: "100%",
    width: "100%",
  },
  mobileList: {
    backgroundColor: "#2a78e5",
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
  mobileBackIcon: {
    padding: "0px 15px 0px",
    color: "white",
  },
}));

const SitePage = ({ clientDetails }) => {
  const classes = useStyles();
  const { state } = useLocation();
  let history = useHistory();
  const matches = useMediaQuery("(min-width:1280px)");

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
    if (state !== undefined && Object.keys(state).length !== 0) {
      setSiteData(state.state);
      setShowDialog(false);
    }
  }, [clientDetails, state]);

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
  const desktopSite =
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

  const mobileSite =
    Object.keys(siteData).length !== 0 ? (
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
                primary={
                  <div style={{ color: "#ffffff" }}>{siteData.title}</div>
                }
                secondary={
                  <div style={{ color: "#000000" }}>
                    <div>
                      {siteData.address.city}, {siteData.address.country}
                    </div>
                    <div>{siteData.contacts.main.phoneNumber}</div>
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
    ) : null;

  return (
    <Fragment>
      {loadingComponent}
      {matches ? desktopSite : mobileSite}
    </Fragment>
  );
};
export default SitePage;
