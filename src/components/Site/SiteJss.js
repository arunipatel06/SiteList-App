import { makeStyles } from "@material-ui/core";
export const useStyles = makeStyles((theme) => ({
  paper: {
    height: "100%",
    width: "100%",
  },
  mobileList: {
    backgroundColor: "#2a78e5",
  },
  parent: {
    display: "flex",
    flexDirection: "column",
    margin: "30px auto 20px",
    width: "300px",
  },
  icon: {
    fontSize: "30px",
    width: "10%",
    marginRight: "20px",
  },
  iconAndText: {
    display: "flex",
    flexDirection: "row",
    margin: "10px auto 10px",
  },
  detailsText: {
    fontSize: "20px",
    align: "left",
  },
  mobileBackIcon: {
    padding: "0px 15px 0px",
    color: "white",
  },
}));
