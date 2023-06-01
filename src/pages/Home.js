import IntroSHPE from "../components/IntroSHPE";
import React from "react";
import Quote from "../components/Quote";
import LatestMeetings from "../components/LatestMeetings";
import Announcement from "../components/Announcement";

function Home() {
    return (
        <>
            <Announcement/>
            <IntroSHPE/>
            <Quote/>
            <LatestMeetings/>
        </>
    )
}

export default Home