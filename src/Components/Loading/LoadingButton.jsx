// import React, { useState } from "react";
// import Button from "@mui/material/Button";
// import CircularProgress from "@mui/material/CircularProgress";
// import HowToRegIcon from "@mui/icons-material/HowToReg";
// import { LoadingButton } from "@mui/lab";

// function LoadingButton() {
//   const [isLoading, setIsLoading] = useState(false);

//   const handleClick = () => {
//     setIsLoading(true);

//     setTimeout(() => {
//       setIsLoading(false);
//     }, 2000);
//   };

//   return (
//     <>
//       <Button
//         variant="contained"
//         color="primary"
//         onClick={handleClick}
//         disabled={isLoading}
//         startIcon={!isLoading && <HowToRegIcon />} // Replace 'Icon' with your submit icon component
//       >
//         {isLoading ? (
//           <CircularProgress size={24} color="inherit" />
//         ) : (
//           "Register"
//         )}
//       </Button>
//       <LoadingButton
//         variant="outlined"
//         loadingPosition="start"
//         startIcon={<HowToRegIcon />}
//       >
//         Register
//       </LoadingButton>
//       <LoadingButton
//         loading
//         variant="outlined"
//         loadingPosition="start"
//         startIcon={<HowToRegIcon />}
//       >
//         Register
//       </LoadingButton>
//     </>
//   );
// }

// export default LoadingButton;
