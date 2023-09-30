import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.common.white,
    minWidth: "98%",
    maxWidth: "98%",
    padding: theme.spacing(5, 8),
    margin: theme.spacing(0, "auto"),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(3, 0),
    },
  },
  mainTitle: {
    lineHeight: "1.5",
    marginBottom: theme.spacing(3),
    marginTop: theme.spacing(1),
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: theme.typography.h1.fontSize,
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("md")]: {
      fontSize: theme.typography.h2.fontSize,
    },
  },
  introstyle: {
    display: "flex",
    justifyContent: "space-evenly",
    padding: theme.spacing(2, 3),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      gap: "0.5rem",
    },
  },

  subtitle: {
    display: "flex",
    alignItems: "center",
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightMedium,
    [theme.breakpoints.down("md") && theme.breakpoints.up("sm")]: {
      width: "100%",
    },
  },
  description: {
    color: theme.palette.common.black,
    lineHeight: "1.5",
    paddingRight: "4rem",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      paddingRight: "0rem",
    },
  },
}));

export default useStyles;
