import "./App.css";
import { makeStyles } from "@mui/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";

const useStyles = makeStyles((theme) => ({
  color_test: {
    color: theme.palette.primary.main,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
