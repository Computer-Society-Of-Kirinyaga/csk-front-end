import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Box,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import {
  AccessTimeFilled,
  CalendarMonth,
  LocationOn,
  Business,
} from "@mui/icons-material";
import useStyles from "./upcomingEvents.styles";

const Event = ({
  image,
  title,
  description,
  venue,
  date,
  startTime,
  endTime,
  deliveryMode,
}) => {
  const classes = useStyles();
  return (
    <Card component="div" variant="outlined" className={classes.eventCard}>
      <CardMedia image={image} sx={{ paddingTop: "56.25%" }} />
      <CardContent>
        <Typography variant="h4" align="center" textTransform="capitalize">
          {title}
        </Typography>
        <Typography
          variant="body1"
          align="justify"
          className={classes.description}
        >
          {description}
        </Typography>
        <Box component="div" className={classes.guidance}>
          <Box component="div" className={classes.guidanceElementParent}>
            <Box component="span" className={classes.guidanceElement}>
              <LocationOn className={classes.icon} /> {venue}
            </Box>
            <Box component="span" className={classes.guidanceElement}>
              <CalendarMonth className={classes.icon} /> {date}
            </Box>
          </Box>
          <Box component="div" className={classes.guidanceElementParent}>
            <Box component="span" className={classes.guidanceElement}>
              <AccessTimeFilled className={classes.icon} /> From: {startTime}
            </Box>
            <Box component="span" className={classes.guidanceElement}>
              <AccessTimeFilled className={classes.icon} /> To: {endTime}
            </Box>
          </Box>
          <Box className={classes.guidanceElement}>
            <Business className={classes.icon} />
            {deliveryMode}
          </Box>
        </Box>
      </CardContent>
      <CardActions>
        <Link className={classes.registerBtn}>Register for event</Link>
      </CardActions>
    </Card>
  );
};
export default Event;
