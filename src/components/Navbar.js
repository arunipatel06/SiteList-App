import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
    width: "100%",
    height:"40px",
    position: "fixed",
    backgroundColor:"#2a78e5",
    color:"white"
  },
  parent: {
    display: "flex",
    flexDirection: "row",
    float: "right",
    justifyContent: "center"
  },
}));
const NewNavbar = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.parent}>
        <Typography style={{marginRight:"10px"}}>Home</Typography>
        <Typography style={{marginRight:"10px"}}>Login</Typography>
        <Typography style={{marginRight:"10px"}}>Sign Up</Typography>
      </div>
    </div>
  );
};

export default NewNavbar;
