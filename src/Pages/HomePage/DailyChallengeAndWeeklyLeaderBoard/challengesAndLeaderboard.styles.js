import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: "98%",
    maxWidth: "98%",
    margin: theme.spacing(8, "auto"),
  },
  challengeBox: {
    marginTop: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(4),
    },
  },
  challengeText: {
    lineHeight: "1.5",
    margin: theme.spacing(1.5, 0),
  },
  challengeLink: {
    display: "inline-block",
    padding: theme.spacing(2, 4),
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    textTransform: "capitalize",
    borderRadius: "100px",
  },
  leaderBoardSectionTitle: {
    marginBottom: theme.spacing(2),
  },
  leaderBoardItem: {
    display: "flex",
    marginBottom: theme.spacing(1.5),
    padding: theme.spacing(2),
  },
  leaderBoardItemAboutUser: {
    margin: theme.spacing(0, 3),
    flexGrow: 1,
  },
  leaderBoardUsername: {
    fontWeight: theme.typography.fontWeightMedium,
    textTransform: "capitalize",
    marginBottom: theme.spacing(0.5),
  },
  leaderBoardCourse: {
    marginBottom: theme.spacing(0.5),
    textTransform: "capitalize",
  },
  leaderBoardPoints: {
    fontWeight: theme.typography.fontWeightBold,
    marginRight: theme.spacing(0.4),
  },
}));

export default useStyles;
