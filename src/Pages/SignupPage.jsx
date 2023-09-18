import React from "react";
import { Box, Stack } from "@mui/material";

import ImageLogo from "../Components/SignUpComponent/ImageLogo";
import SignupForm from "../Components/SignUpComponent/SignupForm";

const SignupPage = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-around"
      minHeight="100vh"
      border="1px solid green"
    >
      <Stack direction="row" spacing="8" display="flex" alignItems="center">
        <ImageLogo />
        <SignupForm />
      </Stack>
    </Box>
  );
};

export default SignupPage;
