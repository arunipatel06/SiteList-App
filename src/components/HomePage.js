import React, { Fragment, useState } from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

//components
import SiteList from "./SiteList";
import SitePage from "./SitePage";
import Navbar from "./Navbar";

const useStyles = makeStyles((theme) => ({
  navbar: {
    height: "50px",
    width: "100%",
    color: "black",
    position: "fixed",
    alignItems: "center",
  },
  siteList: {
    marginTop: "40px",
  },
  sitePage: {
    paddingTop: "60px",
  },
}));

const HomePage = () => {
  const classes = useStyles();
  const matches = useMediaQuery("(min-width:1280px)");

  const [clientDetails, setClientDetails] = useState({});
  const desktopHome = (
    <div>
      <Grid container>
        <Grid xs={12}>
          <div className={classes.navbar}>
            <Navbar />
          </div>
        </Grid>
        <Grid md={4} xs={12}>
          <div className={classes.siteList}>
            <SiteList setClientDetails={setClientDetails} />
          </div>
        </Grid>
        <Grid md={6} xs={12}>
          <div className={classes.sitePage}>
            <SitePage clientDetails={clientDetails} />
          </div>
        </Grid>
      </Grid>
    </div>
  );
  const mobileHome = (
    <div>
      <Grid container>
        <Grid xs={12}>
          <div className={classes.navbar}>
            <Navbar />
          </div>
        </Grid>
        <Grid md={4} xs={12}>
          <div className={classes.siteList}>
            <SiteList setClientDetails={setClientDetails} />
          </div>
        </Grid>
      </Grid>
    </div>
  );
  return (
    <Fragment>
      <div>{matches ? desktopHome : mobileHome}</div>
    </Fragment>
  );
};

export default HomePage;
