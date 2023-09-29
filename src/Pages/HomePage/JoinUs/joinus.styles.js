import { makeStyles } from "@mui/styles";
import bgImg from "../../../assets/images/techie.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    background: `linear-gradient(rgba(0, 0, 0, .8), rgba(0, 0, 0, .6)), url(${bgImg})`,
    minWidth: "98%",
    maxWidth: "98%",
    minHeight: "60vh",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: theme.spacing(1)
  },
  textElement: {
    color: theme.palette.common.white,
    marginBottom: theme.spacing(6),
    width: "80%",
    textAlign: "center",
    lineHeight: "1.6",
  },
  joinLink: {
    display: "inline-block",
    padding: theme.spacing(3, 5),
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    borderRadius: "100px",
    textTransform: "capitalize",
  },
}));

export default useStyles;
