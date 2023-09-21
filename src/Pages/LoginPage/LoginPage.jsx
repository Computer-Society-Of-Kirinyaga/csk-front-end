import React from "react";
import { Box, Container } from "@mui/material";
import PublicAppBar from "./../../Components/AppBars/PublicAppBar";
import { Grid } from "@mui/material";
import ImageLogo from "../../Components/Login/LoginLogo";
import LoginForm from "../../Components/Login/LoginForm";

function LoginPage() {
  return (
    <Box sx={{ minHeight: "100vh" }}>
      <Container sx={{ paddingTop: "1rem" }}>
        <PublicAppBar />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={5}>
            <ImageLogo />
          </Grid>

          <Grid item xs={12} sm={7}>
            <LoginForm />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default LoginPage;
