import React from "react";
import { Box, Grid } from "@mui/material";
import ImageLogo from "../../Components/SignUp/SignupLogo";
import SignupForm from "../../Components/SignUp/SignupForm";
import PublicAppBar from "../../Components/AppBars/PublicAppBar";

const SignupPage = () => {
  return (
    <div>
      <Box sx={{ paddingTop: "1rem" }}>
        <PublicAppBar />
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6}>
            <ImageLogo />
          </Grid>

          <Grid item xs={12} sm={6}>
            <SignupForm />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default SignupPage;
