import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

const ImageIntro = styled.img`
    height: 300px;
    width: 1200px;
`

const ContentContainer = styled.div`
    width: 100%;
`;

const BlueBox = styled.div`
    background-color: #1A2B52;
    height: 150px;
    width: 100%;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 50px;
`
const WhiteBox = styled.div`
    background-color: white;
    height: 100px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
`;

const AboutContainer = styled.div`

`;

const AboutIamgeContainer = styled.div`

`;

const AboutImage = styled.div`

`

const AboutTextContainer = styled.div`

`

const AboutHeader = styled.div`

`

function AboutTinas() {
    return(
        <>
        <Container>
            <ImageIntro src="/OSU-SHPE/images/shpetinas.png"/>

            <ContentContainer>  
                <BlueBox>SHPEtina</BlueBox>
                <WhiteBox>Creating a community to support and empower women in STEM</WhiteBox>

            </ContentContainer>



        </Container>
        </>
    )
}

export default AboutTinas;