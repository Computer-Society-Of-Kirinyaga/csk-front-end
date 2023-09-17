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
  },
}));

export default useStyles;
