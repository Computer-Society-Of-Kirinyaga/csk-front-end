import React from 'react';
import { Container, Grid, Typography, IconButton, Box } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


const Footer = () => {
   const iconStyle = {
    color: 'white',
  };

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
                <FacebookIcon style={iconStyle}/>
                </a>
              </IconButton>
              <IconButton color="inherit">
              <a href="">
                <TwitterIcon style={iconStyle} />
                </a>
              </IconButton>
              <IconButton color="inherit">
              <a href="https://chat.whatsapp.com/HZHZ80YycmMLjDMqOoI42U">
                <WhatsAppIcon style={iconStyle}/>
                </a>
              </IconButton>
              <IconButton color="inherit">
              <a href="https://www.linkedin.com/in/kirinyaga-university/">
                <LinkedInIcon style={iconStyle}/>
                </a>
              </IconButton>
              <IconButton color="inherit">
              <a href="https://github.com/Computer-Society-Of-Kirinyaga">
                <GitHubIcon style={iconStyle}/>
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
            <Typography variant="subtitle1" align="left"  lineHeight={3} font-fontSize={10}>
             
              
                Email: cskirinyaga@kyu.ac.ke
                <br />
                WhatsApp: +254791379440
                <br />
                Phone: 0791379440
              
            </Typography>
            <Box align="right">
            
              <Typography variant="subtitle1">Powered by CSK</Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;