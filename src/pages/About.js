import { height } from "@mui/system";
import React from "react";
import AboutShpe from "../components/AboutShpe";
import AboutUs from "../components/AboutUs";
import BackgroundImage from "../components/BackgroundImage";
import Footer from "../components/Footer";

function About() {
    return (
        <>
            <BackgroundImage image="/OSU-SHPE/images/bowling.png" tall="25vh"/>
            <AboutUs/>
            <BackgroundImage image="/OSU-SHPE/images/meeting2.png" tall="45vh"/>
            <AboutShpe/>
            <BackgroundImage image="/OSU-SHPE/images/national3.png" tall="45vh"/>
        </>
    )
}

export default About