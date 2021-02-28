import React, { Fragment, useState } from "react";
import { Grid } from "@material-ui/core";
import { useStyles } from "./HomeJss";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import SiteList from "../List/SiteList";
import SitePage from "../Site/SitePage";
import Navbar from "../Nav/Navbar";

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
          <div className={classes.mobileNavbar}>
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
