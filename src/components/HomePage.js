import React from "react";
import { Grid } from '@material-ui/core';

//components
import SiteList from "./SiteList";
import SitePage from "./SitePage";

const HomePage = () => {
  return (
    <div>
      <Grid container>
      <Grid xs={4}>
      <SiteList /> 
      </Grid>
      <Grid xs={6}>
      <SitePage />
      </Grid>
      </Grid>
      
      
    </div>
  );
};

export default HomePage;
