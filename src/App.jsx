import "./App.css";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Footer from "./Components/Footer";

const useStyles = makeStyles((theme) => ({
  color_test: {
    color: theme.palette.primary.main,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <>
      <Typography variant="h1" className={classes.color_test}>
        Welcome to the csk app
      </Typography>
      <Footer />
    </>
  );
}

export default App;
