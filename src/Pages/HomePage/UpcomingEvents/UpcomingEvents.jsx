import { Container, Grid, Typography } from "@mui/material";
import Event from "./Event";
import defaultEventImage from "../../../assets/images/default-event-image.jpg";
import useStyles from "./upcomingEvents.styles";
import defaultEvents from "./defaultEvents";

const UpcomingEvents = () => {
  const classes = useStyles();
  return (
    <Container component="section" className={classes.root}>
      <Typography
        variant="h3"
        textTransform="uppercase"
        align="center"
        className={classes.sectionTitle}
      >
        upcoming events
      </Typography>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        element="div"
        className={classes.cardsHolder}
      >
        {defaultEvents.map((event, index) => (
          <Grid item key={index} xs={12} sm={12} md={4}>
            <Event
              key={index}
              image={event.image ? event.image : defaultEventImage}
              title={event.name}
              description={event.description}
              venue={event.venue}
              date={event.date}
              startTime={event.startTime}
              endTime={event.endTime}
              deliveryMode={event.deliveryMode}
            />
          </Grid>
        ))}
        {/* <Event
          image={defaultEventImage}
          title="web development for beginners"
          description={dummyDescription}
          venue="Computer lab 3"
          date="wednesdays"
          startTime="4pm"
          endTime="5pm"
          deliveryMode="physical"
        /> */}
      </Grid>
    </Container>
  );
};
export default UpcomingEvents;
