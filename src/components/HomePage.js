import React, {useState} from "react";
import { Grid } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

//components
import SiteList from "./SiteList";
import SitePage from "./SitePage";
import Navbar from "./Navbar"

const useStyles = makeStyles((theme) => ({
  navbar: {
    height: "50px",
    width:"100%",
    color: "black",
    position: "fixed",
    alignItems:"center"
  },
  siteList:{
    marginTop:"40px"
  },
  sitePage:{
    paddingTop:"60px"
  }
}));

const HomePage = () => {
  const classes = useStyles();

  const [clientDetails, setClientDetails] = useState({});
  return (
    <div>
      <Grid container>
        <Grid xs={12}>
          <div className={classes.navbar}>
          <Navbar />
          </div>
        </Grid>
        <Grid xs={4} >
          <div className={classes.siteList}>
          <SiteList setClientDetails={setClientDetails} />
          </div>
          
        </Grid>
        <Grid xs={6}>
          <div className={classes.sitePage}><SitePage clientDetails={clientDetails} /></div>       
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePage;
