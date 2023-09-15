import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createTheme,
  ThemeProvider,
  StyledEngineProvider,
  responsiveFontSizes,
} from "@mui/material";

const theme = createTheme({
  palette: {
    common: {
      black: "#000",
      white: "#fff",
    },
    background: {
      paper: "#fff",
      default: "#fafafa",
      main: "#fafafa",
    },
    primary: {
      light: "#7EC348",
      main: "#006401",
      contrastText: "#fff",
    },
    secondary: {
      // light: "",
      main: "#C79B32",
      // dark: "",
      contrastText: "#fff",
    },
    error: {
      light: "#e57373",
      main: "#f44336",
      dark: "#d32f2f",
      contrastText: "#fff",
    },
    warning: {
      main: "#ed6c02",
      light: "#ff9800",
      dark: "#e65100",
    },
    info: {
      main: "#0288d1",
      light: "#03a9f4",
      dark: "#01579b",
    },
  },
  typography: {
    fontFamily: "Poppins",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 800,
    h1: {
      fontSize: "2.5rem",
      fontWeight: "bold",
    },
    h2: {
      fontSize: "2rem",
      fontWeight: "bold",
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: "bold",
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: "bold",
    },
    h5: {
      fontSize: "1.3rem",
      fontWeight: "bold",
    },
    h6: {
      fontSize: "1.125rem",
      fontWeight: "bold",
    },
    subtitle1: {
      fontSize: "0.813rem",
      fontWeight: "bold",
    },
    body1: {
      fontSize: "1rem",
      lineHeight: "1.037rem",
      fontWeight: 400,
    },
    button: {
      fontSize: "0.938rem",
    },
  },
});

let appTheme = createTheme(theme);
appTheme = responsiveFontSizes(appTheme);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={appTheme}>
        <App />
      </ThemeProvider>
    </StyledEngineProvider>
  </React.StrictMode>,
);
