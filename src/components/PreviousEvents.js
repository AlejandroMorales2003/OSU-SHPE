import React from "react";
import styled from "styled-components";
import {EventImages} from "../data"

const Container = styled.div`
    width: 100%;
    background-color: #1A2B52;
    padding: 20px 50px;
`

const Title = styled.h1`
    color: #ED5D29;
    text-align: center;
    font-size: 40px;
    border-bottom: 5px solid #ED5D29;
`;
const EventContainer = styled.div`
//margin-top: 20px;
    //background-color: white;
    //height: 100vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`;

const Images = styled.img`
    margin: 20px;
    max-height: 550px;
    max-width: 600px;
    border: 5px solid #ED5D29;
`;


function PreviousEvents() {
    return(
        <>
        <Container>
            <Title>Past Events</Title>
            <EventContainer>
                {EventImages.map((item) => (
                    <Images src={item.img}/>
                ))}
                {/* <Images src="/OSU-SHPE/images/gala.png"/>
                <Images src="/OSU-SHPE/images/deacon.png"/>
                <Images src="/OSU-SHPE/images/bowlingEve.png"/>
                <Images src="/OSU-SHPE/images/gradschool.png"/>
                <Images src="/OSU-SHPE/images/shpegiving.png"/>
                <Images src="/OSU-SHPE/images/studysesh.png"/> */}
            </EventContainer>
        </Container>
        </>
    )
}

export default PreviousEvents;