import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: "98%",
    maxWidth: "98%",
    margin: theme.spacing(4, "auto"),
    padding: theme.spacing(3),
    backgroundColor: theme.palette.common.white,
  },
  benefitsTitle: {
    transform: "translateX(-50px)",
    marginBottom: theme.spacing(1),
  },
  listItem: {
    marginBottom: theme.spacing(2.5),
  },
  benefitsImage: {
    width: "400px",
  },
}));
export default useStyles;
