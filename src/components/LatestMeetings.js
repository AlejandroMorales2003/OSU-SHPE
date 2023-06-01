import React, {useEffect,useState} from "react";
import styled,{keyframes} from "styled-components";

const SlideAndFadeLeft = keyframes`
    from {
        opacity: 0;
        transform: translateX(-500px);
    }

    to {
        opacity: 1;
        transform: translateX(0px);
    }
`;

const SlideAndFadeRight = keyframes`
    from {
        opacity: 0;
        transform: translateX(500px);
    }

    to {
        opacity: 1;
        transform: translateX(0px);
    }
`;

const Container = styled.div`
    height: 70vh;
    width: 100%;
    background-color: #1A2B52;
    padding: 20px 50px;
`;

const Title = styled.h1`
    color: #ED5D29;
    text-align: center;
    font-size: 40px;
    border-bottom: 5px solid #ED5D29;
`;

const MeetingContainer = styled.div`
    margin-top: 20px;
    background-color: white;
    display: flex;
`;

const MeetingImageContainer = styled.div`
    flex: 1;
    height: 60vh;
    //width: 100%;
    width: 50vh;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const MeetingImage = styled.img`
    width: 550px;
    height: 550px;

    ${props => props.active} {
        animation-name: ${SlideAndFadeLeft};
        animation-duration: 1.5s;
    }
`;

const MeetingTextContainer = styled.div`
    flex: 1;
    width: 50vh;
    text-align: center;
    background-color: #f1f1f1;
    justify-content: center;

    ${props => props.active} {
        animation-name: ${SlideAndFadeRight};
        animation-duration: 1.5s;
    }
`;

const MeetingTitle = styled.h1`
    margin-top: 40px;
    font-size: 70px;
`;
const MeetingTime = styled.h2`
    margin-top: 30px;
    font-style: italic;
    font-size: 50px;
`;

const MeetingDescription = styled.p`
    margin-top: 30px;
    font-size: 30px;
`;

function LatestMeetings() {
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
            <Title>Upcoming Meeting!</Title>

            <MeetingContainer>
                <MeetingImageContainer>
                    <MeetingImage src="/images/springMeeting.png" active={effects}/>
                </MeetingImageContainer>
                <MeetingTextContainer active={effects}>
                    <MeetingTitle>SPRING TERM MEETING!</MeetingTitle>
                    <MeetingTime> 6:00pm STAG 212</MeetingTime>
                    <MeetingDescription>These are the next incoming general body meetings for spring!</MeetingDescription>
                </MeetingTextContainer>
    
            </MeetingContainer>
        </Container>
        </>
    )
};

export default LatestMeetings;