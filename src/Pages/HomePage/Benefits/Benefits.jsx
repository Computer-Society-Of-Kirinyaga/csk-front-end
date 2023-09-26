import { Container, Grid, Typography } from "@mui/material";
import benefitsImage from "../../../assets/images/happy-woman-chatting-large.png";
import useStyles from "./benefits.styles";

const Benefits = () => {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Grid container alignItems="center" justifyContent="center">
        <Grid
          item
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          xs={12}
          md={12}
          lg={6}
          xl={6}
        >
          <Typography variant="h3" className={classes.benefitsTitle}>
            Advantages of joining us
          </Typography>
          <ol>
            <li className={classes.listItem}>Enhance your coding skills</li>
            <li className={classes.listItem}>Networking opportunities</li>
            <li className={classes.listItem}>Get access to coding resources</li>
            <li className={classes.listItem}>
              Skills development in technology
            </li>
            <li className={classes.listItem}>Collaborative coding projects</li>
            <li className={classes.listItem}>
              Access to free daily challenges to level up your skills
            </li>
            <li className={classes.listItem}>
              Access to our events which are 100% free
            </li>
            <li className={classes.listItem}>Be part of a dynamic community</li>
          </ol>
        </Grid>
        <Grid
          item
          container
          justifyContent="center"
          alignItems="center"
          xs={12}
          md={12}
          lg={6}
          xl={6}
        >
          <img
            src={benefitsImage}
            alt="happy woman chatting online with friends"
            className={classes.benefitsImage}
          />
        </Grid>
      </Grid>
    </Container>
  );
};
export default Benefits;
