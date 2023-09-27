import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import useStyles from "./challengesAndLeaderboard.styles";
const ChallengeItem = ({ title, text, challengeLink }) => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.challengeBox}>
      <Typography variant="h4" textTransform="capitalize">
        {title}
      </Typography>
      <Typography
        variant="body1"
        textAlign="justify"
        className={classes.challengeText}
      >
        {text}
      </Typography>
      <Link to={challengeLink} className={classes.challengeLink}>
        go to challenge
      </Link>
    </Box>
  );
};
export default ChallengeItem;
