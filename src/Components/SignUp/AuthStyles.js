import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  ImageBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    display: { xs: "none", sm: "flex" },
  },

  SignupLogo: {
    maxWidth: "400px",
    height: "auto",
  },
  LoginLogo: {
    maxWidth: "300px",
    height: "auto",
  },
  registerTitle: {
    textAlign: "center",
    color: theme.palette.primary.main,
    fontWeight: "bold",
    fontSize: "2rem",
    margin: "20px 0",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem",
    },
  },
  paper: {
    padding: "20px",
    margin: "20px",
  },
  submitBTN: {
    display: "block",
    margin: "auto",
    color: "secondary",
    marginTop: theme.spacing(2),
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
    },
    // for smaller screens
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  dontHavAccount: {
    textAlign: "center",
    marginTop: "20px",
  },
  HaveAccount: {
    textAlign: "center",
    marginTop: "20px",
  },
}));

export default useStyles;
