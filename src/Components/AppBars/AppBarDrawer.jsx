import {
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  IconButton,
  Typography,
  CssBaseline,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { Link } from "react-router-dom";
import useStyles from "./AppDrawer.styles";

const AppBarDrawer = ({ linkItems }) => {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        className={classes.drawer}
      >
        <CssBaseline />
        <Typography variant="h5" className={classes.title}>
          Computer Society of Kirinyaga
        </Typography>
        <Divider />
        <List>
          {linkItems &&
            linkItems.map((item, index) => (
              <ListItemButton key={index}>
                <ListItemText>
                  <Link to={item.to} className={classes.linkItem}>
                    {item.label}
                  </Link>
                </ListItemText>
              </ListItemButton>
            ))}
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon />
      </IconButton>
    </>
  );
};
export default AppBarDrawer;
