import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  navbar: {
    height: "50px",
    width: "100%",
    color: "black",
    position: "fixed",
    zIndex: 5,
    alignItems: "center",
  },
  mobileNavbar: {
    height: "50px",
    width: "100%",
    color: "black",
    zIndex: 5,
    position: "fixed",
  },
  siteList: {
    marginTop: "40px",
  },
  sitePage: {
    paddingTop: "60px",
  },
}));
