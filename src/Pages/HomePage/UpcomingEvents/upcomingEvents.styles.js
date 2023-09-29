import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: "98%",
    maxWidth: "98%",
    padding: theme.spacing(2, 0),
  },
  sectionTitle: {
    fontSize: theme.typography.h2.fontSize,
    margin: theme.spacing(2, 1),
  },
  cardsHolder: {},
  eventCard: {
    width: "25rem",
    borderRadius: "10px",
    overflow: "hidden",
    margin: theme.spacing(2, "auto"),
  },
  description: {
    margin: theme.spacing(1, 0),
  },
  guidance: {
    margin: theme.spacing(2.5, 0),
    marginBottom: theme.spacing(0.2),
  },
  guidanceElementParent: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(1.5),
  },
  guidanceElement: {
    display: "flex",
    alignItems: "center",
    width: "50%",
  },
  icon: {
    marginRight: theme.spacing(1),
    color: theme.palette.primary.main,
  },
  registerBtn: {
    display: "block",
    backgroundColor: theme.palette.primary.main,
    minWidth: "100%",
    textAlign: "center",
    padding: theme.spacing(2, 1),
    color: theme.palette.common.white,
    textTransform: "capitalize",
    borderRadius: "8px",
  },
}));
export default useStyles;
