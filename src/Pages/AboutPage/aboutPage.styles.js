import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
    },
    title: {
        fontSize: "2rem",
        fontWeight: "bold",
        marginTop: "4rem",
    },
    mission: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginTop: "2rem",
        width: "85vw",
        gap: "10rem",
    },
    image: {
        marginTop: "6rem",
    },
    aboutImage: {
        width: "75vw",
        height: "30vw",
    },
    lowerSec: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
        marginTop: "4rem",
    },
    visionDiv: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        height: "30vw",
        width: "85vw",
        gap: "7rem",
    },
    objectivesDiv: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        height: "30vw",
        width: "85vw",
        gap: "7rem",
        marginTop: "4rem",
    },
    cardBox: {
        display: "flex",
        flexDirection: "column",
        // alignItems: "center",
        // justifyContent: "center",
        // width: "25vw",
        height: "25vw",
        gap: "1rem",
    },
    cardImage: {
        width: "25vw",
        height: "25vw",
    },

}));