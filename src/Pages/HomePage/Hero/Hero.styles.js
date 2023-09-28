import { makeStyles } from "@mui/styles";

const LINK_SCROLL_SIDE = "4rem";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.common.white,
    minWidth: "98%",
    maxWidth: "98%",
    padding: theme.spacing(5, 0),
    margin: theme.spacing(0, "auto"),
  },
  mainTitle: {
    lineHeight: "1.5",
    marginBottom: theme.spacing(10),
    marginTop: theme.spacing(1),
  },
  subtitle: {
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightMedium,
    position: "relative",
    width: "max-content",
    transform: "translateX(1.5rem)",
    "&::after": {
      content: "''",
      width: "1.2rem",
      height: "3px",
      position: "absolute",
      top: "50%",
      left: "0",
      transform: "translate(-110%, -50%)",
      backgroundColor: "currentcolor",
    },
  },
  linkScroll: {
    minWidth: LINK_SCROLL_SIDE,
    minHeight: LINK_SCROLL_SIDE,
    maxWidth: LINK_SCROLL_SIDE,
    maxHeight: LINK_SCROLL_SIDE,
    borderRadius: "50%",
    backgroundColor: theme.palette.primary.main,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  heroImage: {
    width: "30rem",
    transform: "translateX(-8%)",
    [theme.breakpoints.down("md")]: {
      width: "20rem",
      transform: "none",
    },
  },
}));

export default useStyles;
