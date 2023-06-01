import React from 'react'
import styled from 'styled-components'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import { Link } from "react-router-dom";

/* This decides how big the footer is and separates it into three parts*/

const Container = styled.div`
    border-top: 3px solid black;
    display:flex;
    height: 29vh;
    background-color: #1A2B52;
    //background-color: #ED5D29;
`;

/* LEFT SIDE OF THE FOOTER */

const Left = styled.div`
    //background-color: #2F4D87;
    flex: 1;
    display:flex;
    flex-direction: column;
    align-items: center;
`;

const Join = styled.h1`
    text-align: center;
    font-family: 'Tech';
    font-size: 50px;
    //font-style: italic;
    text-shadow: 1px 1px 1px black;
    color: #ED5D29;
    //color: #2F4D87;
    margin-top: 10px;
`;

const Description = styled.p`
    color: white;
    text-align: center;
    //font-family: urbanist;
    margin: 20px 0px;
`;

const IdealButton = styled.button`
    background-color: white;
    border: 2px solid black;
    font-size: 20px;
    border-radius: 10px;
    margin-top: 10px;
    width: 150px;
    height: 60px;
    cursor: pointer;
    transition: .5s ease-in-out;

    &:hover {
        background-color: #ED5D29;
        transform:scale(1.1);
    }
`;

/* THE CENTER OF THE FOOTER */

const Center = styled.div`
    //background-color: #2F4D87;
    flex: 1;
    text-align: center;
    //border-left: 4px solid #2F4D87;
    //border-right: 4px solid #2F4D87;
`;

const CenterTitle = styled.h3`
    margin-top: 10px;
    font-size: 50px;
    //font-style: italic;
    text-shadow: 1px 1px 1px black;
    color: #ED5D29;
`;

const List = styled.ul`
    margin-top: 20px;
    list-style: none;
    display:flex;
    flex-wrap:wrap;
    font-size: 20px;
`;

const ListItem = styled(Link)`
    text-decoration: none;
    color: white;
    width: 50%;
    margin-bottom: 20px;
    cursor:pointer;
    transition: all .5s ease;

    &:hover {
        transform:scale(1.1);
        color: #ED5D29;
    }
`;


/* RIGHT SIDE OF THE FOOTER */

const Right = styled.div`
    flex: 1;
    padding: 10px;
`;

const ContactTitle = styled.h1`
    //margin-top: 10px;
    //font-style: italic;
    text-align: center;
    color: #ED5D29;
    text-shadow: 1px 1px 1px black;
    font-size: 45px;
`
const SocialContainer = styled.a`
    text-decoration:none;
    margin-top: 15px;
    display:flex;
    align-items: center;
    color: white;
    //background-color: black;
    width: 325px;

    cursor:pointer;
    transition: all .5s ease;
    &:hover {
        transform:scaleY(1.2);
        transform:scaleX(1.05);
        color: black;
    }
`

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    //color: white;
    background-color: #${props=>props.color};
    display:flex;
    align-items:center;
    justify-content: center;
    margin-right: 10px;
`;

const SocialDescription = styled.p`
    font-size: 20px;
`

const Footer = () => {
  return (
    <Container>
        <Left>
            <Join>Join the Familia!</Join>
            <Description>Use Ideal Logic to become a member and get weekly email reminders!</Description>
            <a href="https://apps.ideal-logic.com/osusee" target="_blank" rel="noopener noreferrer">
                <IdealButton>Ideal-Logic</IdealButton>
            </a>
        </Left>

        <Center>
            <CenterTitle>Guide!</CenterTitle>
            <List>
                <ListItem to="/">Home</ListItem>
                <ListItem to="/about">About Us</ListItem>
                <ListItem to="/officers">Officers</ListItem>
                <ListItem to="/events">Events</ListItem>
                <ListItem to="/fundraisers">Fundraisers</ListItem>
                <ListItem to="/shpetinas">SHPEtinas</ListItem>
            </List>
        </Center>


        <Right>
            <ContactTitle>Follow Us!</ContactTitle>

            <SocialContainer href="https://www.instagram.com/oregonstateshpe/?hl=en" target="_blank" rel="noopener noreferrer">
                <SocialIcon color="ED5D29">
                    <InstagramIcon/>
                </SocialIcon>
                <SocialDescription> oregonstateshpe</SocialDescription>
            </SocialContainer>

            <SocialContainer href='https://www.facebook.com/SHPEOSU1/' target="_blank" rel="noopener noreferrer">
                <SocialIcon color="ED5D29">
                    <FacebookIcon/>
                </SocialIcon>
                <SocialDescription> SHPE at Oregon State University </SocialDescription>
            </SocialContainer>

            <SocialContainer href="mailto:shpe@oregonstate.edu" target="_blank">
                <SocialIcon color="ED5D29">
                    <EmailIcon/>
                </SocialIcon>
                <SocialDescription> shpe@oregonstate.edu </SocialDescription>
            </SocialContainer>

        </Right>

    </Container>
  )
}

export default Footer