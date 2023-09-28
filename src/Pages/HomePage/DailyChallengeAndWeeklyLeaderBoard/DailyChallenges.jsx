import { Box, Typography } from "@mui/material";
import ChallengeItem from "./ChallengeItem";
const DailyChallenges = () => {
  return (
    <Box component="div">
      <Typography variant="h3" textTransform="capitalize">
        daily challenges
      </Typography>
      <ChallengeItem
        title="algorithms and data structures"
        text="write a function called palindrome that checks if a string is palindrome or not, the function returns true if the string passes is palindrome and false if it is not, a palindrome string is a string that reads the same way both forward and reverse eg 'eye' is palindrome because it reads the same way both forward and reverse"
      />
    </Box>
  );
};
export default DailyChallenges;
