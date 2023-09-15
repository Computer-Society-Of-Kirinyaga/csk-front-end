import { AppBar, Toolbar, Box, CssBaseline } from "@mui/material";
import { useTheme } from "@mui/styles";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.jpg";
import useStyles from "./PublicAppBar.styles";

const PublicAppBar = () => {
  const classes = useStyles();
  const theme = useTheme();
  const navItems = [
    { label: "home", to: "/" },
    { label: "about us", to: "/" },
    { label: "events", to: "/" },
    { label: "gallery", to: "/" },
    { label: "blog", to: "/" },
    { label: "contact us", to: "/" },
  ];
  return (
    <AppBar elevation={0}>
      <CssBaseline />
      <Toolbar
        className={classes.toolbar}
        sx={{ background: theme.palette.background.paper }}
      >
        <img
          src={logo}
          alt="logo of the Computer Society of Kirinyaga"
          className={classes.logo}
        />
        <Box>
          {navItems.map((item, index) => (
            <Link to={item.to} key={index} className={classes.linkItem}>
              {item.label}
            </Link>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default PublicAppBar;
