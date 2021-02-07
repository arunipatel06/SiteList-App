/* eslint-disable react/style-prop-object */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Grid, Typography } from "@material-ui/core";
import Profile from "../assets/Profile.jpg";

//icons
import PersonIcon from "@material-ui/icons/Person";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import PinDropIcon from "@material-ui/icons/PinDrop";

const clientDetails = {
  id: "h8ZUHSsZ_A",
  clientId: "HYm3QIXsbAQYL",
  title: "Electronics HQ",
  createdAt: "Fri Dec 07 2018 02:15:07 GMT-0500 (EST)",
  updatedAt: "Tue Jul 16 2019 10:18:01 GMT-0400 (EDT)",
  contacts: {
    main: {
      id: "XPp7oyJRmz",
      firstName: "Hugh",
      lastName: "Windler",
      email: "Aurelio.Goyette@yahoo.com",
      phoneNumber: "533.880.9306 x0425",
      jobTitle: "National Applications Planner",
      address: {
        zipCode: "25048",
        city: "New Gwen",
        street: "63833 Alexys Gateway",
        country: "Kenya",
        state: "Texas",
      },
    },
  },
  address: {
    zipCode: "74881-2911",
    city: "Lakinchester",
    street: "611 Miller Glen",
    country: "France",
    state: "Illinois",
  },
  images: [
    "http://lorempixel.com/640/480/city",
    "http://lorempixel.com/640/480/city",
  ],
  tags: ["renovated", "company"],
};

const useStyles = makeStyles((theme) => ({
  paper: {
    height: "100%",
    width: "100%",
  },
  parent: {
    display: "flex",
    flexDirection: "column",
    margin: "50px auto 20px",
    width:"300px",

  },
  icon: {
    fontSize: "30px",
    width: "10%",
    marginRight:"20px",
  },
  iconAndText: {
    display: "flex",
    flexDirection: "row",
    margin: "10px auto 10px"
  },
  detailsText: {
    fontSize: "20px",
    align:"left"
  },
}));

const SitePage = () => {
  const classes = useStyles();
  return (
    <div>
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
                <Typography className={classes.detailsText} >
                  {clientDetails.contacts.main.firstName}{" "}
                  {clientDetails.contacts.main.lastName}  
                </Typography>
                <Typography variant="Subtitle"> {clientDetails.contacts.main.jobTitle}</Typography>
                </div>
              </div>
              <div className={classes.iconAndText}>
                <PhoneIcon disableElevation={true} className={classes.icon} />
                <Typography className={classes.detailsText}>
                  {clientDetails.contacts.main.phoneNumber}
                </Typography>
              </div>
              <div className={classes.iconAndText}>
                <EmailIcon disableElevation={true} className={classes.icon} />
                <Typography className={classes.detailsText}>
                  {clientDetails.contacts.main.email}
                </Typography>
              </div>
              <div className={classes.iconAndText}>
                <PinDropIcon disableElevation={true} className={classes.icon} />
                <Typography className={classes.detailsText}>
                  {clientDetails.contacts.main.address.street}
                </Typography>
              </div>
            </div>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};
export default SitePage;
