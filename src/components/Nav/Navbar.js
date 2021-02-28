import React, { useState, Fragment } from "react";
import { Typography, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import MobileNavMenu from "./MobileNavMenu";

//Icons
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "40px",
    backgroundColor: "#2a78e5",
    color: "white",
  },
  parent: {
    display: "flex",
    flexDirection: "row",
    float: "right",
    justifyContent: "center",
  },
  menuButton: {
    transition: "0.5s",
    color: "#ffffff",
    fontSize: "25px",
    fontWeight: "normal",
    margin: "0px",
    "&:hover": {
      color: "#e31b6d",
    },
    marginLeft: "10px",
  },
  mobileNav: {
    opacity: 1,
    height: "100vh",
    width: "100%",
    position: "fixed",
    zIndex: 1100,
    left: 0,
    top: 0,
    backgroundColor: "#efefef",
  },
  navText: {
    color: "#ffffff",
    fontWeight: 500,
  },
  accountIcon: {
    color: "#ffffff",
    marginLeft: "90px",
  },
}));

const NewNavbar = (props) => {
  const classes = useStyles();
  const matches = useMediaQuery("(min-width:1280px)");
  const [mobileOverlay, setMobileOverlay] = useState(false);

  const desktopNav = (
    <div className={classes.root}>
      <div className={classes.parent}>
        <Typography style={{ margin: "10px" }}>Home</Typography>
        <Typography style={{ margin: "10px" }}>Login</Typography>
        <Typography style={{ margin: "10px" }}>Sign Up</Typography>
      </div>
    </div>
  );
  const mobileNav = (
    <div className={classes.root}>
      <IconButton
        style={{ display: mobileOverlay ? "none" : "block", padding: "0px" }}
        onClick={() => {
          setMobileOverlay((mobileOverlay) => !mobileOverlay);
        }}
      >
        <MenuIcon className={classes.menuButton} />
        <div style={{ marginLeft: "90px ", marginTop: "0px" }}>
          <Typography variant="h6" className={classes.navText}>
            Scheduling
          </Typography>
        </div>
        <IconButton>
          <AccountCircleIcon edge="end" className={classes.accountIcon} />
        </IconButton>
      </IconButton>
      <div
        style={{
          display: mobileOverlay ? "block" : "none",
        }}
        className={classes.mobileNav}
      >
        <MobileNavMenu
          mobileOverlay={mobileOverlay}
          setMobileOverlay={setMobileOverlay}
        />
      </div>
    </div>
  );
  return <Fragment>{matches ? desktopNav : mobileNav}</Fragment>;
};

export default NewNavbar;
