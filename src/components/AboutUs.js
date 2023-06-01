import React from "react";
import styled, {keyframes} from "styled-components";

/* ANIMATIONS */

const SlideAndFadeRight = keyframes`
    from {
        //opacity: 0;
        transform: translateX(-1000px);
    }

    to {
        opacity: 1;
        transform: translateX(0px);
    }
`;

const SlideAndFadeLeft = keyframes`
    from {
        //opacity: 0;
        transform: translateX(1000px);
    }

    to {
        opacity: 1;
        transform: translateX(0px);
    }
`;

const Container = styled.div`
    width: 100%;
    position: relative;
    height: 75vh;
    background-color: #1A2B52;
    display: flex;
    overflow: hidden;
`;


const CircleBackground = styled.div`
    top: -200px;
    position: absolute;
    background-color: #ED5D29;
    border-radius: 50%;
    width: 1000px;
    height: 1000px;
    border: 1px solid black;
`;

const CircleTextContainer = styled.div`
    position: absolute;
    background-color: #F1F1F1;
    width: 500px;
    height: 500px;
    left: 18%;
    top: 27%;
    align-items: center;
    text-align: center;
    border-radius: 25%;
    padding: 20px;
    border: 1px solid black;

    animation-name: ${SlideAndFadeRight};
    animation-duration: 1.25s;
`

const CircleHeader = styled.h1`
    font-size: 70px;
    text-decoration: underline;
`;

const CircleDescription = styled.p`
    margin-top: 20px;
    font-size: 20px;
`;

const CircleButton = styled.button`
    margin-top: 30px;

    background-color: white;
    border: 2px solid black;
    font-size: 20px;
    border-radius: 10px;
    width: 150px;
    height: 60px;
    cursor: pointer;
    transition: .5s ease-in-out;

    &:hover {
        background-color: #ED5D29;
        transform:scale(1.1);
    }
`;


const RectangleBackground = styled.div`
    position: absolute;
    background-color: white;
    width: 700px;
    height: 400px;
    top: 20%;
    left: 50%;
    border-radius: 10px;
    border: 3px solid black;

    display: flex;
    align-items: center;
    justify-content: center;

    animation-name: ${SlideAndFadeLeft};
    animation-duration: 1.25s;
`
const RectangleTextContainer = styled.div`
    background-color: #F1F1F1;
    width: 300px;
    height: 350px;
    margin: 10px;
    padding: 15px;
    text-align: center;
    border-radius: 10px;
    border: 1px solid black;
`;

const RectangleHeader = styled.h1`
    text-decoration: underline;
    margin-top: 40px;
    font-size: 45px;
`;

const RectanlgeDescription = styled.p`
    margin-top: 15px;
    font-size: 20px;
`;

const Image = styled.img`
    
`;

function AboutUs() {

    return (
        <>
        <Container>
            <CircleBackground>
                <CircleTextContainer>
                    <CircleHeader>
                        OSU SHPE
                    </CircleHeader>
                    <CircleDescription>
                        Oregon State University SHPE Chapter began in 2010 with a few eager, driven engineering students that wanted to
                        develop a community. Regardless of the size of the chapter; community engagement, professional development,
                        networking and building a familia have all been important aspects and incorporated into the club's events.
                        Although membership has oscillated throughout the years there have always been a committed few who have
                        engaged with the community at the university and over a decade of commitment and networking the chapter has
                        over 20 active members and we keep on rising! 
                    </CircleDescription>
                    <a href="https://apps.ideal-logic.com/files/ver20161107090427/public/be65f8854a429c48_F3T9-25VWY/orig/SHPE_Bylaws.pdf" target="_blank" rel="noopener noreferrer">
                    <CircleButton>
                        Bylaws
                    </CircleButton>
                    </a>
                </CircleTextContainer>
            </CircleBackground>

            <RectangleBackground>
                <RectangleTextContainer>
                    <RectangleHeader>
                        Our Mission
                    </RectangleHeader>
                    <RectanlgeDescription>
                        We want to provide opportunities for Hispanic students at Oregon State University in terms thier professional career
                        devlopment, strengthen students perspectives on their abilities, and build a friendly community.
                    </RectanlgeDescription>

                </RectangleTextContainer>
    
                <RectangleTextContainer>
                    <RectangleHeader>
                        Our Vision      
                    </RectangleHeader>
                    <RectanlgeDescription>
                        We want to create a Hispanic community that will lead and create a purpose in the professional careers.
                    </RectanlgeDescription>
                </RectangleTextContainer>
            </RectangleBackground>
        </Container>
        </>
    )
};

export default AboutUs