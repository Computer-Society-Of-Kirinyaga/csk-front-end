import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  drawer: {
    padding: theme.spacing(3, 1),
  },
  title: {
    padding: theme.spacing(2, 1),
  },
  linkItem: {
    color: theme.palette.common.black,
    textTransform: "capitalize",
  },
}));
export default useStyles;
