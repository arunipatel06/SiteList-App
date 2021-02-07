import React, {useState} from "react";
import { Grid } from '@material-ui/core';

//components
import SiteList from "./SiteList";
import SitePage from "./SitePage";


const HomePage = () => {
  const [clientDetails, setClientDetails] = useState({});
  return (
    <div>
      <Grid container>
      <Grid xs={4}>
      <SiteList setClientDetails={setClientDetails}/> 
      </Grid>
      <Grid xs={6} >
      <SitePage clientDetails={clientDetails}/>
      </Grid>
      </Grid>    
    </div>
  );
};

export default HomePage;
