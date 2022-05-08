import React from 'react'
import styled from 'styled-components'
import Button from './Button'

export const Container = styled.div` 
    margin-top: 75px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`

export const ImgIntro = styled.img` 
    object-fit: contain;
    height: auto;
`

export const H1 = styled.h1` 
    margin: 33px 0;
    font-size: 2.5rem;
    line-height: 60px;
    width: 65%;
    @media screen and (max-width: 750px){
        font-size: 3rem;
        width: 100%;
        line-height: 70px;
    }
`

export const Pintro = styled.p` 
    width: 45%;
    margin-bottom: 35px;
    font-size: 20px;
    opacity: .9;
    line-height: 30px;
    @media screen and (max-width: 950px){
      width: 76%;
    } 
    @media screen and (max-width: 750px){
        width: 94%;
        font-size: 25px;
        letter-spacing: 2px;
    } 
`

const Intro = () => {
  return (
    <Container>
        <ImgIntro src='https://res.cloudinary.com/dmaviub4l/image/upload/v1651708380/vudbvoolunzmznf6iw49.png' alt='illustration-intro' />
        <H1>All your files in one secure location, accessible anywhere.</H1>
        <Pintro>Fylo stores all you most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.</Pintro>
        <Button type='button' text='Get Started' />
        </Container>
  )
}

export default Intro