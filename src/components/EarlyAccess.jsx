import React from 'react'
import styled from 'styled-components';
import Button from './Button';

export const Early = styled.div` 
    margin-top: 150px;
    background-color: hsl(217, 28%, 15%);
    width: 60%;
    margin: 150px auto 0 auto;
    text-align: center;
    padding: 45px 0;
    border-radius: 5px;
    box-shadow: 3px 3px 7px hsl(0deg 0% 0% / 41%);
    position: relative;
    z-index: 3;  
    @media screen and (max-width: 750px){
        width: 90%;
        margin: 280px auto 0 auto;
        border-radius: 25px;
        padding: 80px 0;
    }
`

export const H2 = styled.h2` 
    font-size: 2rem;
    @media screen and (max-width: 750px){
        font-size: 2.2rem;
    }
`

export const PAcc = styled.p` 
    padding: 25px 75px 40px 75px;
    opacity: 0.8;
    @media screen and (max-width: 750px){
        padding: 40px 75px;
        font-size: 26px;
    }
`

export const Input = styled.input` 
    padding: 20px 40px;
    border-radius: 40px;
    width: calc(70% - 200px);
    margin-right: 25px;
    @media screen and (max-width: 950px){
        display: block;
        margin: 0 auto;
        width: 70%;
    }
    @media screen and (max-width: 750px){
        padding: 35px 40px;
    }
`

const EarlyAccess = () => {
    return(
        <Early>
            <H2>Get early access today</H2>
            <PAcc>It only takes a minute to sign up and our free starter tier is extremely generous. if you have any questions, our support tram would be happy to help you.</PAcc>
            <Input type='text' placeholder='email@example.com'/>
            <Button text='Get Started' classSize='email-btn'/>
        </Early>
    );
}

export default EarlyAccess