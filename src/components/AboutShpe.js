import React,{useEffect, useState} from "react";
import styled, {keyframes} from "styled-components";

const SlideAndFadeLeft = keyframes`
    from {
        opacity: 0;
        transform: translateX(1000px);
    }

    to {
        opacity: 1;
        transform: translateX(0px);
    }
`;

const SlideAndFadeRight = keyframes`
    from {
        opacity: 0;
        transform: translateX(-1000px);
    }

    to {
        opacity: 1;
        transform: translateX(0px);
    }
`;

const Container = styled.div`
    background-color: #1A2B52;
    width: 100%;
    height: 65vh;
    display: flex;
`;

/* Left side of shpe component */

const Left = styled.div`
    flex: 1;
    background-color: white;
    margin: 50px;
    border-radius: 40px;
    display: flex;
    flex-direction: column;
    background-color: #F1F1F1;

    ${props => props.active} {
        animation-name: ${SlideAndFadeRight};
        animation-duration: 1.25s;
    }
`
const Logos = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
`;

const ShpeLogo = styled.img`
    width: 350px;
    margin-right: 50px;
`;

const NationalLogo = styled.img`
    width: 200px;
`;

const ShpeTextContainer = styled.div`
    padding: 20px;
    text-align: center;

`;

const ShpeHeader = styled.h1`
    font-size: 35px;
`;

const ShpeDescription = styled.p`
    margin-top: 10px;
    font-size: 20px;
`;

/* Right side of shpe component */

const Right = styled.div`
    position: relative;
    flex: 1;
    background-color: #ED5D29;
    display: flex;
    align-items: center;
`

const Triangle = styled.div`
    width: 100%;
    height: 100%;
    background-color: #1A2B52;
    clip-path: polygon(0 0, 100% 0, 100% 100%);
`;

const Containers = styled.div`
    width: 100%;
    position: absolute;
    display: flex;

    ${props => props.active} {
        animation-name: ${SlideAndFadeLeft};
        animation-duration: 1.25s;
    }
`;

const DescriptionContainers = styled.div`
    padding: 20px;
    text-align: center;
    width: 350px;
    background-color: white;
    height: 350px;
    margin: 10px;
    border-radius: 10px;
    border: 1px solid black;

`;

const DescriptionHeader = styled.h1`
    text-decoration: underline;
    margin-top: 40px;
    font-size: 35px;
`;
const DescriptionText= styled.p`
    margin-top: 15px;
    font-size: 20px;
`;
function AboutShpe() {
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
        if (offset > 500) {
          setEffects(false);
        } else {
          setEffects(true);
        }
        console.log(offset)
    }, [offset]);

    return (
        <>
            <Container>
                <Left active={effects}>
                    <Logos>
                        <ShpeLogo src="/OSU-SHPE/images/shpe.png"/>
                        <NationalLogo src="/OSU-SHPE/images/nationallogo.png"/>
                    </Logos>

                    <ShpeTextContainer>
                        <ShpeHeader> SHPE National</ShpeHeader>
                        <ShpeDescription> The Society of Hispanic Professional Engineers (SHPE) was founded in Los Angeles, California,
                            in 1974 by a group of engineers employed by the city of Los Angeles. Their objective was to form a national
                            organization of professional engineers to serve as role models in the Hispanic community. The concept of
                            Networking was the key basis for the organization. SHPE quickly established two student chapters to begin
                            the network that would grow to encompass the nation as well as reach countries outside the United States.
                            Today, SHPE enjoys a strong but independent network of professional and student chapters throughout the
                            nation.
                        </ShpeDescription>
                    </ShpeTextContainer>

                </Left>

                <Right>
                    <Triangle>
                    </Triangle>

                    <Containers active={effects}>
                        <DescriptionContainers>
                            <DescriptionHeader>Mission Statement</DescriptionHeader>
                            <DescriptionText> SHPE changes lives by empowering the Hispanic community to realize its fullest potential
                                and to impact the world through STEM awareness, access, support and development.
                            </DescriptionText>

                        </DescriptionContainers>
                    
                        <DescriptionContainers>
                            <DescriptionHeader>Vision Statement</DescriptionHeader>
                            <DescriptionText> SHPE’s vision is a world where Hispanics are highly valued and influential as the leading 
                            innovators, scientists, mathematicians, and engineers. To learn more about SHPE at the national level, visit: 
                            <a href="https://shpe.org" target="_blank" rel="noopener noreferrer">https://www.shpe.org/</a>
                            </DescriptionText>
                        </DescriptionContainers>
                    </Containers>
                </Right>

            </Container>
        </>
    )
}

export default AboutShpe