import { makeStyles } from "@mui/styles";

const LOGO_SIZE = "3rem";
const useStyles = makeStyles((theme) => ({
  public_app_bar: {
    width: "100%",
    background: theme.palette.background.paper,
    margin: 0,
    padding: 0
  },
  toolbar: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
  logo: {
    width: LOGO_SIZE,
    maxWidth: LOGO_SIZE,
    height: LOGO_SIZE,
    maxHeight: LOGO_SIZE
  },
  linkItem: {
    display: "inline-block",
    textTransform: "capitalize",
    padding: theme.spacing(0, 3),
    color: theme.palette.common.black
  }
}));
export default useStyles;
