import { makeStyles } from "@mui/styles";
const ICON_SIZE = "2rem";
const FOOTER_LINK_SIZE = "3rem";
const useStyles = makeStyles((theme) => ({
  footer: {
    background: theme.palette.secondary.main,
    color: theme.palette.common.white,
  },
  footer_title: {
    marginBottom: theme.spacing(3),
  },
  footerLink: {
    width: FOOTER_LINK_SIZE,
    height: FOOTER_LINK_SIZE,
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  footerIcon: {
    color: theme.palette.common.white,
    width: ICON_SIZE,
    height: ICON_SIZE,
  },
}));
export default useStyles;
