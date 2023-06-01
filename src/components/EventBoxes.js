import React, {useState,useEffect} from "react";
import styled, {keyframes} from "styled-components";

const SlideAndFadeLeft = keyframes`
    from {
        opacity: 0;
        transform: translateX(-250px);
    }

    to {
        opacity: 1;
        transform: translateX(0px);
    }
`;

const SlideAndFadeRight = keyframes`
    from {
        opacity: 0;
        transform: translateX(250px);
    }

    to {
        opacity: 1;
        transform: translateX(0px);
    }
`;

const Container = styled.div`
    background-color: #ED5D29;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px;
`

const Event = styled.div`
    height: 500px;
    width: 1500px;
    background-color: white;
    border: 4px solid black;
    margin-top: 40px;
    display: flex;

`
const EventTextContainer = styled.div`
    //margin: 30px;
    flex: 1;
    width: 750px;
    //display: flex;

    ${props => props.active} {
        animation-name: ${SlideAndFadeLeft};
        animation-duration: 1s;
    }
`

const EventHeader = styled.h1`
    font-size: 40px;
    //padding: 20px;
    margin-top: 20px;
    margin-left: 20px;
`;

const EventSubHeader = styled.h2`
    //color: #ED5D29;
    //color: #1A2B52;
    font-size: 30px;
    color: #E04151;
    margin-top: 20px;
    //text-align: center;
    padding: 0px 60px;
`

const EventDescription = styled.p`
    //padding: 15px 20px;

    margin-top: 15px;
    margin-left: 20px;
    font-size: 22px;
`;

const EventImageContainer = styled.div`
    flex: 1;
    width: 750px;
    overflow: hidden;

    ${props => props.active} {
        animation-name: ${SlideAndFadeRight};
        animation-duration: 1s;
    }
`;

const EventImage = styled.img`
    display: cover;
    width: 750px;
    //top: -100px;
    border-left: 2px solid black;
`

function EventBoxes() {
    const [offset, setOffset] = useState(0);
    const [effects,setEffects] = useState(true);

    const onScroll = () => {setOffset(window.pageYOffset)};
   

    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => {
          window.removeEventListener("scroll", onScroll);
        };
      }, []);

    useEffect(() => {
        if (offset > 100) {
          setEffects(false);
        } else {
          setEffects(true);
        }
        console.log(offset)
    }, [offset]);

    return (
        <>
        <Container>

            {/* GENERAL MEETINGS */}
            <Event>
                <EventTextContainer>
                    <EventHeader>General Meetings</EventHeader>
                    <EventSubHeader>Workshops</EventSubHeader>
                    <EventDescription>Workshops are given by engineering professionals around Oregon who give SHPE students advice
                    to assess and revise their resumes, interviewing abilities, and elevator pitch. SHPE students will learn the 
                    expectations to obtain a intership or full-time career and their impact as a Hispanic in their field.
                    </EventDescription>
                    <EventSubHeader>Social Gatherings</EventSubHeader>
                    <EventDescription>Gatherings alllow us to create friendships and find a community at OSU. We know that being in
                    STEM and being a Hispanic is rare so getting together to express our cultural values and experiences allow us
                    to create long-lasting relationships.
                    </EventDescription>
                </EventTextContainer>

                <EventImageContainer>
                    <EventImage src="/OSU-SHPE/images/generalMeeting.png"/>
                </EventImageContainer>
            </Event>

            {/* FUNDRAISERS*/}
            <Event>
                <EventTextContainer>
                    <EventHeader>Fundraisers</EventHeader>
                    <EventSubHeader>Why we do it?</EventSubHeader>
                    <EventDescription> Taking OSU students to SHPE's National Conference is one of the main goals of OSU SHPE. Many
                    students don't have the funds to attend the event, so we use fundraisers to help involved SHPE members with 
                    financial need.
                    </EventDescription>
                    <EventSubHeader>What we do?</EventSubHeader>
                    <EventDescription> We raise money by conducting fundraiser events at OSU. For example, salsa nights, raffle baskets,
                    selling raspados, etc.
                    </EventDescription>
                </EventTextContainer>

                <EventImageContainer>
                    <EventImage src="/OSU-SHPE/images/raffle.png"/>
                </EventImageContainer>
            </Event>
    
            {/* OUTREACH */}
            <Event>
                <EventTextContainer active={effects}>
                    <EventHeader>Outreach</EventHeader>
                    <EventSubHeader>Why we do it?</EventSubHeader>
                    <EventDescription> We understand that sparking interest in STEM for young Hispanic will create leaders of the future.
                    By doing outreach events, we will be able increase Hispanic STEM college undergraduates and provide them with 
                    the benefits and opportunites that STEM offers.
                    </EventDescription>
                    <EventSubHeader>What we do?</EventSubHeader>
                    <EventDescription> We conduct fun outreach events at elementary school and at OSU. For example, Noches de Ciencas,
                    Juntos SHPE stand, etc.
                    </EventDescription>
                </EventTextContainer>

                <EventImageContainer active={effects}>
                    <EventImage src="/OSU-SHPE/images/noches.png"/>
                </EventImageContainer>
            </Event>

        </Container>
        </>
    )
}

export default EventBoxes;