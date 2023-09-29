import React from "react";
import { Box } from "@mui/material";
import PublicAppBar from "./../../Components/AppBars/PublicAppBar";
import { Grid } from "@mui/material";
import ImageLogo from "../../Components/Login/LoginLogo";
import LoginForm from "../../Components/Login/LoginForm";

function LoginPage() {
  return (
    <Box sx={{ minHeight: "100vh" }}>
      <Box sx={{ paddingTop: "1rem" }}>
        <PublicAppBar />
        <Grid container spacing={1}>
          <Grid item xs={12}  md={6} sm={6}>
            <ImageLogo />
          </Grid>

          <Grid item xs={12} md={6} sm={6}>
            <LoginForm />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default LoginPage;
