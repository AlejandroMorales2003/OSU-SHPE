import React, {useEffect,useState} from "react";
import styled, {keyframes} from "styled-components";
import {EventImages} from "../data"

const FlipSlide = keyframes`
    from {
        opacity: 0;
        transform: rotate(90deg);
    }

    to {
        opacity: 1;
        transform:translate(0);
    }
`;

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
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`;

const Images = styled.img`
    margin: 20px;
    max-height: 550px;
    max-width: 600px;
    border: 5px solid #ED5D29;

    ${props => props.active} {
        animation-name: ${FlipSlide};
        animation-duration: 1s;
    }
`;


function PreviousEvents() {
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
        if (offset > 800) {
          setEffects(false);
        } else {
          setEffects(true);
        }
        console.log(offset)
    }, [offset]);


    return(
        <>
        <Container>
            <Title>Past Events</Title>
            <EventContainer>
                {EventImages.map((item) => (
                    <Images src={item.img} active={effects}/>
                ))}
            </EventContainer>
        </Container>
        </>
    )
}

export default PreviousEvents;