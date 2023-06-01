import React from "react";
import styled,{keyframes} from "styled-components";

const Fade = keyframes`
    from {
        opacity: 0;
        //transform:scaleX(-1);
    }
    to {
        opacity: 1;
    }
`;

const Container = styled.div`
    height: 5vh;
    background-color: #1A2B52;
    //background-color: #ED5D29;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 3px solid black;
`;

const Text = styled.p`
    color: white;
    font-size: 30px;

    animation-name: ${Fade};
    animation-duration: 6s;
    animation-delay: 6s;
    animation-iteration-count: infinite;
`;

function Announcement() {
    return(
        <>
            <Container>
                <Text>SCROLL DOWN TO SEE NEXT MEETING</Text>
            </Container>
        </>
    )
}

export default Announcement;