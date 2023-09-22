import React from 'react';
import { Container, Grid, Typography, IconButton, Box } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
// import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'orange', color: '#fff' }}>
      <Container>
        <Grid
          container
          justifyContent="space-around"         
          display="flex"
          style={{ padding: "1rem 0" }}
        >
          <Grid item xs={12} sm={6} >
            <Typography variant="h6" >Social Media</Typography>
              <IconButton color="inherit">
              <a href="">
                <FacebookIcon />
                </a>
              </IconButton>
              <IconButton color="inherit">
              <a href="">
                <TwitterIcon />
                </a>
              </IconButton>
              <IconButton color="inherit">
              <a href="https://chat.whatsapp.com/HZHZ80YycmMLjDMqOoI42U">
                <WhatsAppIcon />
                </a>
              </IconButton>
              <IconButton color="inherit">
              <a href="https://www.linkedin.com/in/kirinyaga-university/">
                <LinkedInIcon />
                </a>
              </IconButton>
              <IconButton color="inherit">
              <a href="https://github.com/Computer-Society-Of-Kirinyaga">
                <GitHubIcon />
                </a>

              </IconButton>
            
            <Box paddingY={8}>
              <Typography variant="subtitle1" component="h4">
                Copyright &copy; 2023 Computer Society of Kirinyaga
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography variant="h6" align="center">
              Support
            </Typography>
            <Typography variant="subtitle1" align="center"  padding={3} text-align="justify">
              
                Email: cskirinyaga@kyu.ac.ke
                <br />
                WhatsApp: +25412345678
                <br />
                Phone: 076543210
              
            </Typography>
            <Box align="right">
            {/* paddingX ={9} paddingY={1}  */}
              <Typography variant="subtitle1">Powered by CSK</Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;