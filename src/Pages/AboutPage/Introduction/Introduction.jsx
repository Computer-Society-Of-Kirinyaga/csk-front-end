import { Grid, Typography } from "@mui/material";
import useStyles from "./Intro.styles";
import React from "react";

function Introduction() {
  const classes = useStyles();
  return (
    <Grid
      container
      component="section"
      className={classes.root}
      rowSpacing={4}
      columnSpacing={7}
    >
      <Grid component="h1">
        <Typography className={classes.mainTitle}>About Us</Typography>
        <Grid component="section" className={classes.introstyle}>
          <Typography className={classes.subtitle}>Our Mission</Typography>
          <Typography className={classes.description}>
            The Computer Society of Kirinyaga (CSK) is a student-led Community
            committed to fostering collaboration and innovation among students
            within the School of Pure and Applied Sciences and those with a
            fervent interest in technology at Kirinyaga University.
            <br />
            Our community comprises dedicated Microsoft Learn Student
            Ambassadors and members of the Google Developer Students Club.
            <br />
            Our primary mission is to create a vibrant platform where students
            can come together to not only acquire knowledge but also engage in
            creative endeavors, foster meaningful collaborations, and drive
            innovation. By harnessing the power of technology, we aspire to
            empower our members to make a positive impact in their communities.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Introduction;
