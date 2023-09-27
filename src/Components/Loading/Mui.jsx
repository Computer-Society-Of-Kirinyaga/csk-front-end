import React, { useState } from "react";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import { LoadingButton } from "@mui/lab";

function Mui() {
  const [isLoading, setIsLoading] = useState(false);
  const [buttonText, setButtonText] = useState("Register");

  const handleButtonClick = () => {
    setIsLoading(true);
    setButtonText("Please Wait");

    setTimeout(() => {
      setIsLoading(false);
      setButtonText("Register");
    }, 2000);
  };

  return (
    <>
      <LoadingButton
        style={{ display: "inline-flex", alignItems: "center" }}
        variant="outlined"
        loadingPosition="start"
        startIcon={<HowToRegIcon />}
        onClick={handleButtonClick}
        loading={isLoading}
      >
        {buttonText}
      </LoadingButton>
    </>
  );
}

export default Mui;
