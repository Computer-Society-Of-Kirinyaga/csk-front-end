import PublicAppBar from "../../Components/AppBars/PublicAppBar";
import Hero from "./Hero/Hero";
import UpcomingEvents from "./UpcomingEvents/UpcomingEvents";
import Benefits from "./Benefits/Benefits";
import JoinUs from "./JoinUs/JoinUs";
const HomePage = () => {
  return (
    <>
      <PublicAppBar />
      <Hero />
      <UpcomingEvents />
      {/* <Benefits /> */}
      <JoinUs />
    </>
  );
};
export default HomePage;
