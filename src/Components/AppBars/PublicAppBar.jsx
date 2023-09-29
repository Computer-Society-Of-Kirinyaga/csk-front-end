import {
  AppBar,
  Toolbar,
  Box,
  CssBaseline,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/styles";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.jpg";
import useStyles from "./PublicAppBar.styles";
import AppBarDrawer from "./AppBarDrawer";

const PublicAppBar = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const navItems = [
    { label: "home", to: "/" },
    { label: "about us", to: "/" },
    { label: "events", to: "/" },
    { label: "gallery", to: "/" },
    { label: "blog", to: "/" },
    { label: "contact us", to: "/" },
    { label:  "sign-up", to: "/signup"}
  ];
  return (
    <AppBar elevation={1}>
      <CssBaseline />
      <Toolbar
        className={classes.toolbar}
        sx={{ background: theme.palette.background.paper }}
      >
        <Link to="/">
          <img
            src={logo}
            alt="logo of the Computer Society of Kirinyaga"
            className={classes.logo}
          />
        </Link>
        {isMatch ? (
          <AppBarDrawer linkItems={navItems} />
        ) : (
          <Box>
            {navItems.map((item, index) => (
              <Link to={item.to} key={index} className={classes.linkItem}>
                {item.label}
              </Link>
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};
export default PublicAppBar;
