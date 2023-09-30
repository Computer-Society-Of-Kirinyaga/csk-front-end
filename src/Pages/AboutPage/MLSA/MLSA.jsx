import { Grid, Typography } from "@mui/material";
import MLSALogo from "../../../assets/images/MLSALogo.png";
import React from "react";
import useStyles from "./MLSA.styles";

function MLSA() {
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
        The Microsoft Learn Student Ambassadors (MLSA)
      </Typography>
      <Grid component="section" className={classes.parentCover}>
        <Typography className={classes.aboutmlsa}>
          The Microsoft learn student ambassador program is a global group of
          on-campus ambassadors who are eager to help students and their
          communities, lead in their local tech circles and develop technical
          and career skills for the future.
          <br />
          The Computer Society of Kirinyaga is proud to be a part of this
          program and we are committed to helping students and our community to
          learn, grow and connect with their peers and industry experts.
          <br />
          We are dedicated to empowering students to achieve more through
          technical and career development.
          <br />
          Visit the Microsoft Learn Student Ambassadors website
          <a href="https://studentambassadors.microsoft.com/" target="_blank">
            <hr /> Visit our Website
          </a>
        </Typography>

        <Grid component="section" className={classes.parentImage}>
          <img src={MLSALogo} className={classes.img} />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default MLSA;
