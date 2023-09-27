import "./App.css";
import { makeStyles } from "@mui/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import SignupPage from "./Pages/SignupPage/SignupPage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Loading from "./Components/Loading/Loading";
// import LoadingButton from "./Components/Loading/LoadingButton";
import Mui from "./Components/Loading/Mui";

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
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/load" element={<Mui />} />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </>
  );
}

export default App;
