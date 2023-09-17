import { Container, Typography, Box, IconButton, Grid } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import heroImage from "../../../assets/images/people-with-computer-medium.png";
import { Link } from "react-router-dom";
import useStyles from "./Hero.styles";
const Hero = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      component="section"
      className={classes.root}
      rowSpacing={4}
      columnSpacing={7}
      alignItems="center"
      justifyContent="space-between"
    >
      <Grid item xl={7} lg={7} md={12} xs={12} component="div">
        <Typography className={classes.subtitle}>Welcome to CSK</Typography>
        <Typography variant="h1" className={classes.mainTitle}>
          We create products and solve existing societal problems
        </Typography>
        <Link className={classes.linkScroll}>
          <ArrowDownwardIcon fontSize="large" sx={{ color: "#fff" }} />
        </Link>
      </Grid>
      <Grid item xl={5} lg={5} md={12} xs={12} component="div">
        <img src={heroImage} className={classes.heroImage} />
      </Grid>
    </Grid>
  );
};
export default Hero;
