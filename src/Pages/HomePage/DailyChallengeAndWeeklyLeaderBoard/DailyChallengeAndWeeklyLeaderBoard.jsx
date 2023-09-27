import { Container, Grid } from "@mui/material";
import WeeklyLeaderBoard from "./WeeklyLeaderBoard";
import DailyChallenges from "./DailyChallenges";
import useStyles from "./challengesAndLeaderboard.styles";

const DailyChallengeAndWeeklyLeaderBoard = () => {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Grid container justifyContent="space-around">
        <Grid
          item
          container
          justifyContent="center"
          xs={12}
          md={12}
          lg={6}
          xl={6}
        >
          <DailyChallenges />
        </Grid>
        <Grid
          item
          container
          justifyContent="center"
          xs={12}
          md={12}
          lg={6}
          xl={6}
        >
          <WeeklyLeaderBoard />
        </Grid>
      </Grid>
    </Container>
  );
};

export default DailyChallengeAndWeeklyLeaderBoard;
