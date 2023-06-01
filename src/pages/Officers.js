import React from "react";
import styled from 'styled-components';
import {Members2} from '../data';
import Person from '../components/Person';

const Container = styled.div`
    background-color: #1A2B52;
    padding: 50px;
`;

const Title = styled.h1`
    color: #ED5D29;
    text-align: center;
    font-size: 90px;
    border-bottom: 5px solid #ED5D29;
`;

const TheCrew = styled.div`
    display: flex;
    flex-wrap: wrap;
`;


const Officers = () => {
  return (
    <Container>
        <Title>2023-2024 SHPE OFFICERS</Title>
        <TheCrew>
            {Members2.map((item) => (
                <Person item={item} key={item.id}/>
            ))}
        </TheCrew>
    </Container>
  )
}
export default Officers