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
  mlsaTitle: {
    lineHeight: "1.5",
    marginBottom: theme.spacing(3),
    marginTop: theme.spacing(1),
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: theme.typography.h1.fontSize,
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("md")]: {
      fontSize: theme.typography.h4.fontSize,
    },
  },
  parentCover: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      gap: "0.5rem",
    },
  },
  aboutmlsa: {
    lineHeight: "1.5",
    width: "50%",
    [theme.breakpoints.down("md")]: {
      width: "98%",
      lineHeight: "1",
    },
  },
  parentImage: {
    width: "450px",
    [theme.breakpoints.down("md")]: {
      width: "98%",
    },
  },
  img: {
    width: "100%",
    height: "100%",
  },
}));

export default useStyles;
