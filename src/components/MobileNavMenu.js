import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Clear } from "@material-ui/icons";
import { Button, IconButton } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  mobileButtonContainer: {
    textAlign: "center",
  },
  mobileButton: {
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 25,
    lineHeight: "53px",
    color: "#3F3F3F",
  },
}));

const MobileNavMenu = ({ mobileOverlay, setMobileOverlay }) => {
  const classes = useStyles();

  return (
    <Fragment>
      <section>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <IconButton
            onClick={() => setMobileOverlay((mobileOverlay) => !mobileOverlay)}
          >
            <Clear />
          </IconButton>
        </div>
        <div className={classes.mobileButtonContainer}>
          <Button className={classes.mobileButton}>Home</Button>
        </div>
        <div className={classes.mobileButtonContainer}>
          <Button className={classes.mobileButton}>Log In</Button>
        </div>
        <div className={classes.mobileButtonContainer}>
          <Button className={classes.mobileButton}>Sign Up</Button>
        </div>
      </section>
    </Fragment>
  );
};

export default MobileNavMenu;
