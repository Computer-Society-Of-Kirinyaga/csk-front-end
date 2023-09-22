import { Container, Grid, Box, Typography } from "@mui/material";
import benefitsImage from "../../../assets/images/happy-woman-chatting-large.png";

const Benefits = () => {
  return (
    <Grid container>
      <Grid item>
        <Typography variant="h3">Advantages of joining us</Typography>
      </Grid>
      <Grid item>
        <img
          src={benefitsImage}
          alt="happy woman chatting online with friends"
        />
      </Grid>
    </Grid>
  );
};
export default Benefits;
