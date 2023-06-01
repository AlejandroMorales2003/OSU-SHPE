import React, {useState,useEffect} from "react";
import styled, {keyframes} from "styled-components";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Link } from "react-router-dom";


/* Arrow Icon on the side of each page */
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: white;
    border-radius: 50%;
    display:flex; 
    align-items:center;
    justify-content:center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props=>props.direction === "left" && "10px"};
    right: ${props=>props.direction === "right" && "10px"};
    margin:auto;
    cursor: pointer;
    opacity:0.5;
    z-index: 2;
    transition: all .5s ease;

    &:hover {
        //background-color: red;
        opacity: 1;
    } 
`;

const Slider = styled.div`
    height: 70vh;
    overflow: hidden;
`;

const Slides = styled.div`
    height: 100%;
    display: flex;
    //overflow: hidden;
    position: relative;
    text-align: center;
    transition: all 1s ease;
    transform:translateX(${props=>props.slideIndex * -100}vw);
`;

const Slide = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`;

const SlideImage = styled.img`
    width: 100vw;
    height: 100%;
    object-fit: cover;
    opacity: 1;
`;


const SlideAndFade = keyframes`
    from {
        opacity: 0;
        transform: translateX(-20px);
    }

    to {
        opacity: 1;
        transform: translateX(0px);
    }
`;

const SlideContainer = styled.div`
    display: flex;
    position: absolute;
    flex-direction: column;
    align-items: center;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
`

const SlideTitle = styled.h1`
    text-shadow: 5px 5px 5px black;
    width: 1500px;
    font-size: 80px;
    color: white;
    //animation-name: none;
    ${props => props.active} {
        animation-name: ${SlideAndFade};
        animation-duration: 2s;
        //animation-delay: 1s;
    }

`;

const OSUlogo = styled.img`
    margin-top: -30px;
    width: 300px;
    height: 300px;
    margin-bottom: -40px;

    ${props => props.active} {
        animation-name: ${SlideAndFade};
        animation-duration: 2s;
        //animation-delay: 1s;
    }
`;

const Description = styled.p`
    color: white;
    font-size: 40px;
    margin-bottom: 10px;
    text-shadow: 5px 5px 5px black;

    ${props => props.active} {
        animation-name: ${SlideAndFade};
        animation-duration: 2s;
        //animation-delay: 1s;
    }
`;

const SlideButton = styled.button`
    background-color: white;
    font-size: 25px;
    width: 200px;
    height: 75px;
    border-radius: 10px;
    border: 2px solid black;
    transition: .5s ease-in-out;
    cursor: pointer;

    ${props => props.active} {
        animation-name: ${SlideAndFade};
        animation-duration: 1.75s;
    }

    &:hover {
        background-color: #ED5D29;
        transform:scale(1.1);
    }
`;

function IntroSHPE () {
    const [slideIndex,setSlideIndex ] = useState(0);
    const handleClick = (direction) => {
        if(direction==="left") {
            setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2)
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex+1 : 0)
            
        }
        console.log("slideIndex", slideIndex);
    };

    const slider = () => {
        if(slideIndex <  2) {
            setSlideIndex(slideIndex + 1)
        } else {
            setSlideIndex(0)
        }
        console.log(slideIndex);
    }

    var mySlides = setTimeout(slider,6000);

    const stopSlider = () => {
        clearTimeout(mySlides);
        mySlides = null;
        console.log("stop!")
    }



    return (
        <Slider>
            <Arrow direction="left" onClick={()=> {handleClick("left");stopSlider();}}>
                <NavigateBeforeIcon/>
            </Arrow>

            <Slides slideIndex={slideIndex}>
                <Slide>
                    <SlideImage src="/images/osucampus2.jpeg"/>

                    <SlideContainer>
                        <SlideTitle active={2 === slideIndex}>OREGON STATE UNIVERSITY SHPE</SlideTitle>
                        <OSUlogo src="/images/beavs2.png" active={2 === slideIndex}/>
                        <Description active={2 === slideIndex}>GO BEAVS!</Description>
                        <Link to="/about">
                            <SlideButton active={2 === slideIndex}>GET STARTED</SlideButton>
                        </Link>
                    </SlideContainer>
                </Slide>
                <Slide>
                    <SlideImage src="/images/officers.png"/>

                    <SlideContainer>
                        <SlideTitle active={0 === slideIndex}>GET TO KNOW THE TEAM</SlideTitle>
                        <Description active={0 === slideIndex}>2023-2024 SHPE BOARD</Description>
                        <Link to="/officers">
                            <SlideButton active={0 === slideIndex}>SEE OFFICERS</SlideButton>
                        </Link>
                    </SlideContainer>
                </Slide>

                <Slide>
                    <SlideImage src="/images/border.png"/>

                    <SlideContainer>
                        <SlideTitle active={1 === slideIndex}>LATEST EVENTS</SlideTitle>
                        <Description active={1 === slideIndex}>STAY INVOLVED AND KEEP UP WITH US</Description>
                        <Link to="/events">
                            <SlideButton active={1 === slideIndex}>SEE EVENTS</SlideButton>
                        </Link>
                    </SlideContainer>
                </Slide>
            </Slides>
            <Arrow direction="right" onClick={()=> {handleClick("right");stopSlider();}}>
                <NavigateNextIcon/>
            </Arrow>
        </Slider>
    )
}

export default IntroSHPE