import { Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import useStyles from "./joinus.styles";

const JoinUs = () => {
  const classes = useStyles();
  return (
    <Container component="section" className={classes.root}>
      <Typography
        variant="h3"
        textTransform="capitalize"
        className={classes.textElement}
      >
        Join us today
      </Typography>
      <Typography
        variant="body1"
        textAlign="center"
        className={classes.textElement}
      >
        Create profiles for friends and family, or split between work and fun.
        With Chrome profiles you can separate all your Chrome stuff. Create
        profiles for friends and family, or split between work and fun.
      </Typography>
      <Link to="/signup" className={classes.joinLink}>Join us</Link>
    </Container>
  );
};
export default JoinUs;
