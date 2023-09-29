import powerPlatform from "../../../assets/images/power-platform.jpg";
import uiUxDesignImg from "../../../assets/images/ui-ux-design.jpg";
import webDevImg from "../../../assets/images/web-development.jpg";
import cyberSec from "../../../assets/images/cyber-sec.jpg";
import mobileApps from "../../../assets/images/mobile-apps.jpg";

const defaultEvents = [
  {
    image: powerPlatform,
    name: "power platform",
    description: `Explore the Power Platform to create efficient business solutions, automate processes, and unlock data insights while designing user-friendly interfaces.`,
    venue: "Computer Lab 3",
    date: "Mondays",
    startTime: "4PM",
    endTime: "5PM",
    deliveryMode: "Physical",
  },
  {
    image: uiUxDesignImg,
    name: "ui/ux design",
    description: `dive into the world of ui/ux design using figma and adobe among other design tools, 
      build real world designs and convert them to real world sites using.`,
    venue: "Computer Lab 3",
    date: "Tuesdays",
    startTime: "4PM",
    endTime: "5PM",
    deliveryMode: "Physical",
  },
  {
    image: webDevImg,
    name: "web development",
    description: `
    Embark on a web development adventure, mastering HTML, CSS, and JavaScript to craft interactive and responsive websites that come to life on the internet.`,
    venue: "Computer Lab 3",
    date: "Wednesdays",
    startTime: "4PM",
    endTime: "5PM",
    deliveryMode: "Physical",
  },
  {
    image: cyberSec,
    name: "cyber security and penetration testing",
    description: `Delve into the world of cybersecurity and penetration testing, where you'll learn to protect digital assets and assess vulnerabilities to safeguard against cyber threats.`,
    venue: "Computer Lab 3",
    date: "Thursdays",
    startTime: "4PM",
    endTime: "5PM",
    deliveryMode: "Physical",
  },
  {
    image: mobileApps,
    name: "mobile apps (flutter)",
    description: `Step into the Android/Flutter domain, where you'll create dynamic mobile applications with Flutter's versatile framework, harnessing the power of Google's Android ecosystem for seamless user experiences.`,
    venue: "Computer Lab 3",
    date: "Fridays",
    startTime: "4PM",
    endTime: "5PM",
    deliveryMode: "Physical",
  },
  {
    name: "cloud workshops",
    description: `Embark on a cloud workshop journey, where you'll harness the potential of cloud computing platforms like Azure to build scalable, efficient, and cost-effective solutions for modern business challenges.`,
    venue: "tbc",
    date: "tbc",
    startTime: "tbc",
    endTime: "tbc",
    deliveryMode: "tbc",
  },
];

export default defaultEvents;
