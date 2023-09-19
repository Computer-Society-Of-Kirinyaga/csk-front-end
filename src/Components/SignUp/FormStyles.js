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
    width: "100%",
    height: "auto",
  },
  registerTitle: {
    textAlign: "center",
    color: theme.palette.primary.main,
    fontWeight: "bold",
    fontSize: "2rem",
    margin: "20px 0",
    
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
  },
}));

export default useStyles;
