import { Grid, Typography, Box } from "@mui/material";
import PublicAppBar from "../../Components/AppBars/PublicAppBar";
import AboutImage from "../../assets/images/scott-graham-unsplash.jpg";
import VisionImage from "../../assets/images/christopher-gower-unsplash.jpg";
import ValuesImage from "../../assets/images/nubelson-fernandes-unsplash.jpg";
import Styles from  "./aboutPage.styles";

function aboutPage() {
    const classes = Styles();

    return (
        <>
        {/* AppBar */}
            <PublicAppBar />

        {/* Main Content */}
        <Grid spacing={3} component="section" className={classes.root} >
            <Grid component="div" >
                <Typography variant="h2" align="center" className={classes.title} >
                    About Us
                </Typography>

                <Grid className={classes.mission}>
                    <Typography variant="h5" className={classes.left} >
                        Our Mission
                    </Typography>
                    <Typography variant="body1" className={classes.right} >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt earum omnis ipsam itaque ipsum corrupti quo, tempora voluptates eius natus error soluta ab! Pariatur aspernatur optio numquam et ratione quia quis! Vitae aut illo sed doloribus nam! Blanditiis, deleniti quia officia quas recusandae assumenda necessitatibus earum dicta incidunt repellendus laudantium facere itaque repudiandae natus, veritatis laborum molestiae porro ut magni dolorem dolores quibusdam minus consequuntur. Placeat quo laborum aut porro nam maiores alias, quam adipisci.
                    </Typography>
                </Grid>
            </Grid>

            <Grid component="div" className={classes.image} >
                <img src={AboutImage} alt="" className={classes.aboutImage} />
            </Grid>

            <Grid component="section" className={classes.lowerSec} >
                <Grid component="div" className={classes.visionDiv}>
                    <Box className={classes.cardBox}>
                        <Typography variant="h5" className={classes.title} >
                            Our Vision
                        </Typography>
                        <Typography variant="p" >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt earum omnis ipsam itaque ipsum corrupti quo, tempora voluptates eius natus error soluta ab! Pariatur aspernatur optio numquam et ratione quia quis! Vitae aut illo sed doloribus nam! Blanditiis, deleniti quia officia quas recusandae assumenda necessitatibus earum dicta incidunt repellendus laudantium facere itaque repudiandae natus, veritatis laborum molestiae porro ut magni dolorem dolores quibusdam minus consequuntur. Placeat quo laborum aut porro nam maiores alias, quam adipisci.
                        </Typography>
                    </Box>
                    <img src={VisionImage} alt="" className={classes.cardImage} />
                </Grid>

                <Grid component="div" className={classes.objectivesDiv}>
                    <img src={ValuesImage} alt="" className={classes.cardImage} />
                    <Box className={classes.cardBox}>
                        <Typography variant="h5" className={classes.title} >
                            Our Objectives
                        </Typography>
                        <Typography variant="p" >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt earum omnis ipsam itaque ipsum corrupti quo, tempora voluptates eius natus error soluta ab! Pariatur aspernatur optio numquam et ratione quia quis! Vitae aut illo sed doloribus nam! Blanditiis, deleniti quia officia quas recusandae assumenda necessitatibus earum dicta incidunt repellendus laudantium facere itaque repudiandae natus, veritatis laborum molestiae porro ut magni dolorem dolores quibusdam minus consequuntur. Placeat quo laborum aut porro nam maiores alias, quam adipisci.
                        </Typography>
                    </Box>
                </Grid>
            </Grid>

        </Grid>

        {/* Footer */}

        </>
    )
}

export default aboutPage;