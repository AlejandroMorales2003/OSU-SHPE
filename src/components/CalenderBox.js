import React from "react";
import styled from "styled-components";


const MainContainer = styled.div`
    background-color: #ED5D29;
    height: 80vh;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Title = styled.div`
    color: white;
    text-align: center;
    font-size: 60px;
    border-bottom: 5px solid #ED5D29;
    border-bottom: 3px solid white;
    margin-bottom: 10px;
`;

const CalenderContainer = styled.div`
    border: 3px solid black;
`;



function CalenderBox() {
    return(
        <>
        <MainContainer>
            <Title>Keep track of Upcoming Events!</Title>
            <CalenderContainer>
                <iframe src="https://calendar.google.com/calendar/embed?src=c_7fdf7ccc8528ea8be62896f0a5d513e60dd4291ef9dfe4de20caf42996ee4de5%40group.calendar.google.com&ctz=America%2FLos_Angeles" style={{border: "0"}} width="1200" height="600" frameborder="0" scrolling="no"></iframe>
            </CalenderContainer>
        </MainContainer>
        </>
    )

}

export default CalenderBox;