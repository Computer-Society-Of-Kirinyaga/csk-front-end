import React from "react";
import { Paper, Box, Typography, Avatar } from "@mui/material";
import useStyles from "./challengesAndLeaderboard.styles";

const LeaderBoardItem = ({
  profileImage,
  firstName,
  lastName,
  year,
  course,
  points,
}) => {
  const classes = useStyles();
  return (
    <Paper className={classes.leaderBoardItem} square={false}>
      <Avatar
        src={profileImage}
        alt={`profile photo of ${firstName} ${lastName}`}
        sx={{ width: 56, height: 56 }}
      />
      <Box component="div" className={classes.leaderBoardItemAboutUser}>
        <Typography className={classes.leaderBoardUsername}>
          {firstName} {lastName}
        </Typography>
        <Typography className={classes.leaderBoardCourse}>{course}</Typography>
        <Typography>Year: {year}</Typography>
      </Box>
      <React.Fragment>
        <Typography className={classes.leaderBoardPoints}>{points}</Typography>
        <Typography>pts</Typography>
      </React.Fragment>
    </Paper>
  );
};
export default LeaderBoardItem;
