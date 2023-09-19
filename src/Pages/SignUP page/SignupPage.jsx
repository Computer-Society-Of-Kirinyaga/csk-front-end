import React from "react";
import { Box, Container, Grid } from "@mui/material";
import ImageLogo from "../../Components/SignUp/ImageLogo";
import SignupForm from "../../Components/SignUp/SignupForm";
import PublicAppBar from "../../Components/AppBars/PublicAppBar";

const SignupPage = () => {
  return (
    <div>
      <Container sx={{ paddingTop: "1rem" }}>
        <PublicAppBar />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <ImageLogo />
          </Grid>

          <Grid item xs={12} sm={6}>
            <SignupForm />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default SignupPage;
