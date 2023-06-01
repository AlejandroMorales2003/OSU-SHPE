import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    //height: 45vh;
    height: ${props => props.tall};
    background-image: url(${props => props.chose});
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    opacity: .9;
    border-bottom: 3px solid black;
    border-top: 3px solid black;
`;

function BackgroundImage({image,tall}) {

    return (
        <>
        <Container chose={image} tall={tall}> </Container>
        </>
    )
};

export default BackgroundImage