import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  ImageBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    display: { xs: "none", sm: "flex" },
  },
  LoginLogo: {
    maxWidth: "400px",
    height: "auto",
  },

  loginTitle: {
    marginTop: "4rem",
    textAlign: "center",
    color: theme.palette.primary.main,
    fontWeight: "bold",
    fontSize: "2rem",
    margin: "20px 0",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem",
      marginTop: "3rem",
    },
  },
  paper: {
    padding: "20px",
    margin: "20px",
    [theme.breakpoints.down("sm")]: {
      padding: "10px",
      margin: "10px",
    },
  },
  submitBTN: {
    color: "secondary",
    marginTop: theme.spacing(2),
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
    },

    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
}));

export default useStyles;
