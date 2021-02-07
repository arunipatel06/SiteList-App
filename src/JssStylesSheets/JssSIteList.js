import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 300,
    alignItems: "left",
    backgroundColor: theme.palette.background.paper,
  },
  list: {
    "&:hover": { color: "black", backgroundColor: "#ffe6cc" },
  },
  selectedItem: {
    color: "#5e5f63",
    backgroundColor: "#fcd8b1",
    borderRight: "4px solid #2b68d6",
  },
  arrowIcon: {
    marginLeft: "8px",
  },
}));
export default useStyles;
