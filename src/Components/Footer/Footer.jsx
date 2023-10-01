import React from "react";
import { Container, Grid, Typography, IconButton, Box } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import useStyles from "./footer.styles";

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer} >
      <Container>
        <Grid
          container
          justifyContent="space-around"
          display="flex"
          style={{ padding: "1rem 0" }}
        >
          <Grid item xs={12} sm={6}>
            <Typography variant="h4" className={classes.footer_title}>
              Social Media
            </Typography>
            <IconButton color="inherit">
              <a href="" className={classes.footerLink}>
                <FacebookIcon className={classes.footerIcon} />
              </a>
            </IconButton>
            <IconButton color="inherit">
              <a href="" className={classes.footerLink}>
                <TwitterIcon className={classes.footerIcon} />
              </a>
            </IconButton>
            <IconButton color="inherit">
              <a
                href="https://chat.whatsapp.com/HZHZ80YycmMLjDMqOoI42U"
                className={classes.footerLink}
              >
                <WhatsAppIcon className={classes.footerIcon} />
              </a>
            </IconButton>
            <IconButton color="inherit">
              <a
                href="https://www.linkedin.com/in/kirinyaga-university/"
                className={classes.footerLink}
              >
                <LinkedInIcon className={classes.footerIcon} />
              </a>
            </IconButton>
            <IconButton color="inherit">
              <a
                href="https://github.com/Computer-Society-Of-Kirinyaga"
                className={classes.footerLink}
              >
                <GitHubIcon className={classes.footerIcon} />
              </a>
            </IconButton>

            <Box paddingY={8}>
              <Typography variant="subtitle1" component="h4">
                Copyright &copy; 2023 Computer Society of Kirinyaga
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography
              variant="h4"
              align="left"
              className={classes.footer_title}
            >
              Support
            </Typography>
            <Typography align="left" lineHeight={3}>
              Email: cskirinyaga@kyu.ac.ke
              <br />
              WhatsApp: +254791379440
              <br />
              Phone: 0791379440
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
