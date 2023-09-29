import React from "react";
import LoginLogo from "../../assets/images/loginLogo.png";
import { Box } from "@mui/material";
import useStyles from "../SignUp/AuthStyles";

function ImageLogo() {
  const classes = useStyles();
  return (
    <Box
      className={classes.ImageBox}
      sx={{ display: { xs: "none", sm: "flex" } }}
    >
      <img src={LoginLogo} alt="logo" className={classes.LoginLogo} />
    </Box>
  );
}

export default ImageLogo;
