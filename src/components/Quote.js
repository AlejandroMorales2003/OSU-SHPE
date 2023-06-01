import React from "react";
import styled, {keyframes} from "styled-components";

const Flip = keyframes`
    from {
        opacity: 0;
        transform:scaleX(-1);
    }
    to {
        opacity: 1;
    }
`;

const Container = styled.div`
    border-top: 3px solid black;
    border-bottom: 3px solid black;
    width: 100%;
    height: 15vh;
    background-color: #F1F1F1;
    text-align: center;
    //justify-content: center;
    position: relative;
    overflow: hidden;
`;

const OrangeCircle = styled.div`
    position: absolute;
    z-index: 1;
    width: 400px;
    height: 400px;
    top: -100px;
    left: 10px;
    border-radius: 50%;
    background-color: #ED5D29;
`

const SmallOrangeCircle = styled.div`
    position: absolute;
    z-index: 1;
    width: 200px;
    height: 200px;
    top: -125px;
    right: 10%;
    border-radius: 50%;
    background-color: #ED5D29;
`

const NavyCircle = styled.div`
    position: absolute;
    z-index: 1;
    width: 350px;
    height: 350px;
    top: 70px;
    right: -50px;
    border-radius: 50%;
    background-color: #1A2B52;;
`

const Header = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    //align-items: center;

    animation-name: ${Flip};
    animation-duration: 2s;
`;

const SHPElogo = styled.img`
    margin: 10px 30px;
    position: relative;
    width: 50px;
    height: 50px;
    z-index: 2;
`;

const QuoteHeader = styled.h1`
    //align-items: center;
    position: relative;
    //margin-top: 20px;
    font-size: 45px;
    z-index: 2;
`;

const QuoteText = styled.p`
    position: relative;
    margin-top: 10px;
    font-size: 30px;
    z-index: 2;
`;

function Quote() {
    return (
        <>
        <Container>
            <OrangeCircle></OrangeCircle>
            <SmallOrangeCircle></SmallOrangeCircle>
            <NavyCircle></NavyCircle>
            <Header>
                <SHPElogo src="/images/shpeLogo.png"/>
                <QuoteHeader> Quote of The Week</QuoteHeader>
                <SHPElogo src="/images/shpeLogo.png"/>
            </Header>
            <QuoteText>"Aprende del pasado, vive en el presente, y trabaja para el futuro"</QuoteText>
        </Container>
        </>
    )
};

export default Quote;