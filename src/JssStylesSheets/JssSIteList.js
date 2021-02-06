import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 300,
    alignItems: "left",
    backgroundColor: theme.palette.background.paper,
  },
  list: {
    "&:hover": { color: "#deeeff", backgroundColor: "#4a88f9" },
  },
  selectedItem: {
    color: "#5e5f63",
    backgroundColor: "#e6f2ff",
    borderRight: "4px solid #2b68d6",
  },
  arrowIcon: {
    marginLeft: "8px",
  },
}));
export default useStyles;
