import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 450,
    alignItems: "left",
    backgroundColor: theme.palette.background.paper,
    position: "relative",
    overflow: "auto",
    maxHeight: 700,
    [theme.breakpoints.up("md")]: {
      maxWidth: 300,
      maxHeight: 700,
    },
  },
  list: {
    "&:hover": { color: "black", backgroundColor: "#b2d2f7" },
  },
  itemSelected: {
    color: "#5e5f63",
    backgroundColor: "#fcd8b1",
    borderRight: "4px solid #2b68d6",
  },
  arrowIcon: {
    marginLeft: "8px",
  },
  button: {
    fontSize: "18px",
    fontStyle: 900,
    float: "right",
    borderRadius: "25px",
    padding: "7px 40px",
    textTransform: "none",
    "&:hover": { color: "white", backgroundColor: "#b2d2f7" },
    color: "#5e5f63",
    backgroundColor: "#dbdbdb",
    border: "none",
    outline: "none",
  },
}));
