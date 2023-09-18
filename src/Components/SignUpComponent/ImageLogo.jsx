import React from "react";
import SignupLogo from "../../assets/images/SignupLogo.png";
import { Box } from "@mui/material";

function Image() {
  return (
    <Box
      flex={2}
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100%"
      sx={{ display: { xs: "none", sm: "flex" } }}
    >
      <img
        src={SignupLogo}
        alt="logo"
        style={{
          width: "100%",
          height: "auto",
        }}
      />
    </Box>
  );
}

export default Image;
