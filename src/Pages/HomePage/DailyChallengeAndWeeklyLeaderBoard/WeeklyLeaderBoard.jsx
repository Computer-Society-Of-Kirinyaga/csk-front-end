import { Box, Typography } from "@mui/material";
import LeaderBoardItem from "./LeaderBoardItem";
import dummyUser1 from "../../../assets/images/dummy-user-1.jpg";
import dummyUser2 from "../../../assets/images/dummy-user-2.jpg";
import useStyles from "./challengesAndLeaderboard.styles";
const WeeklyLeaderBoard = () => {
  const classes = useStyles();
  return (
    <Box component="div">
      <Typography variant="h3" className={classes.leaderBoardSectionTitle}>
        Weekly Leader-board
      </Typography>
      <LeaderBoardItem
        profileImage={dummyUser1}
        firstName="stephen"
        lastName="tharua"
        course="mechanical engineering"
        year="3"
        points="38"
      />

      <LeaderBoardItem
        profileImage={dummyUser2}
        firstName="Ivy"
        lastName="Mbogo"
        course="computer science"
        year="4"
        points="32"
      />

      <LeaderBoardItem
        firstName="Humprey"
        lastName="Muriungi"
        course="Computer science"
        year="4"
        points="29"
      />
    </Box>
  );
};
export default WeeklyLeaderBoard;
