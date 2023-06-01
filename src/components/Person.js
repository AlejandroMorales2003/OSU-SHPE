import React from 'react';
import styled, {keyframes} from 'styled-components'
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const SlideAndFadeRight = keyframes`
    from {
        opacity: 0;
        transform: translateX(-10px);
    }

    to {
        opacity: 1;
        transform: translateX(0px);
    }
`;

const Container = styled.div`
    width: 450px;
    height: 650px;
    //width: 100%;
    //height:100%;
    padding: 20px;
    border-radius: 20px;
    display:flex;
    flex-direction:column;
    margin: 20px 20px;
    background-color: white;
    color:black;
    border: 1px solid black;
`;

const Info = styled.div`
    flex: 1;
    display:flex;
    flex-direction: column;
    padding: 10px;
    //text-align: center;
    //justify-content: center;
    align-items: center;
`;

const ImgContainer = styled.div`
    flex: 1;
    display:flex;
    align-items: center;
    justify-content: center;
    /* animation-name: ${SlideAndFadeRight};
    animation-duration: 1.25s; */

    animation-name: ${SlideAndFadeRight};
    animation-duration: 1.25s;
`;

const Image = styled.img`
    //height: 500px;
    //width: 700px;
    border-radius: 10px;
    background-image: url("${props=>props.bg}");
    background-size: cover;
    background-position: bottom;
    object-fit: cover;
    height: 400px;
    width: 350px;
`;

const Name = styled.h1`
    font-size: 40px;
    //margin-bottom: 20px;
`;

const Pos = styled.p`
    color: #ED5D29;
    text-shadow: 1px 1px 1px black;
    //text-decoration: underline;
    margin-top: 5px;
    font-size: 30px;
`

const Major = styled.p`
    font-style: italic;
    margin-top: 10px;
    font-size: 25px;
`

const Icon = styled.div`
    margin-top: 10px;
    margin-right: 10px;
    display:flex;
    align-items: center;
    justify-content:center;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: #ED5D29;
`;

const LinkedName = styled.p`
    font-size: 24px;
`;

const Contact = styled.div`
    cursor: pointer;
    display:flex;
    align-items: center;
    
    transition: all .5s ease;
    &:hover {
        transform:scale(1.1);
    }
`;

const Person = ({item}) => {

  return (
    <Container id={item.id}>
        <ImgContainer>
            <Image bg={item.img}/>
        </ImgContainer>
        <Info>
            <Name>{item.name}</Name>
            <Pos>{item.pos}</Pos>
            <Major>{item.major}</Major>
            <Contact>
                <Icon>
                    <LinkedInIcon style={{fontSize:45, color: "white"}}/>
                </Icon>

                <LinkedName>
                    {item.linkedin}
                </LinkedName>
            </Contact>
        </Info>
    </Container>
  )
}

export default Person