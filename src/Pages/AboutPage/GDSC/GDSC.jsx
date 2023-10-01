import React from "react";
import GDSCLogo from "../../../assets/images/GDSCLogo.png";
import { Grid, Typography } from "@mui/material";
import useStyles from "./GDSC.styles";

function GDSC() {
  const classes = useStyles();
  return (
    <Grid
      container
      component="section"
      className={classes.root}
      rowSpacing={4}
      columnSpacing={7}
    >
      <Typography className={classes.mlsaTitle}>
        Google Developer Student Clubs. (GDSC)
      </Typography>
      <Grid component="section" className={classes.parentCover}>
        <Typography className={classes.aboutmlsa}>
          The Google Developer Student Clubs (GDSC) program is a grassroots
          channel through which Google provides development skills, mobile and
          web development skills for students, towards employability. The
          program is open to any student, ranging from novice developers who are
          just starting, to advanced developers who want to further their
          skills.
          <br />
          Our mission is to bridge the gap between theory and practical
          knowledge of technology, to help students learn about Google
          technologies, and to build solutions for local businesses and their
          community.
          <br />
          Visit the Google Developer Student Clubs website:
          <a href="https://developers.google.com/community/dsc" target="_blank">
            <hr /> Visit our Website
          </a>
        </Typography>

        <Grid component="section" className={classes.parentImage}>
          <img src={GDSCLogo} className={classes.img} />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default GDSC;
