import React from "react";
import SignupLogo from "../../assets/images/signupLogo.png";
import { Box } from "@mui/material";
import useStyles from "./AuthStyles";

function Image() {
  const classes = useStyles();
  return (
    <Box
      className={classes.ImageBox}
      sx={{ display: { xs: "none", sm: "flex" } }}
    >
      <img src={SignupLogo} alt="logo" className={classes.SignupLogo} />
    </Box>
  );
}

export default Image;
