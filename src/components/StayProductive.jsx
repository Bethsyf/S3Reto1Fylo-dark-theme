import React from 'react'
import styled from 'styled-components'

export const Stay = styled.div` 
    display: flex;
    align-items: center;
  @media screen and (max-width: 950px){
    flex-direction: column;
    }  
    @media screen and (max-width: 750px){
        margin-top: 140px;
    }   
`

export const ImgStay = styled.img` 
    object-fit: contain;
    height: auto;    
    @media screen and (max-width: 750px){
        width: 100%;
    }   
`

export const DivImg = styled.div` 
    padding: 25px;        
`
export const DivP = styled.div` 
    padding: 25px;   
    @media screen and (max-width: 750px){
        margin-top: 30px;
    }      
`

export const H1 = styled.h1` 
    font-size: 2.5rem;
    line-height: 50px;
    width: 70%;
    font-weight: 600;
    @media screen and (max-width: 750px){
        font-size: 2.1rem;
        width: 100%;
        margin-bottom: 20px;
    }      
`

export const P = styled.p` 
    opacity: 0.8;
    font-size: 16px;
    line-height: 20px;
    padding: 12px 0;
    letter-spacing: 1pt;
    @media screen and (max-width: 750px){
        font-size: 27px;
        line-height: 39px;
    }      
`

export const A = styled.a` 
    display: block;
    padding-top: 15px;
    color: #62e0d9;
    text-decoration: underline;
    @media screen and (max-width: 750px){
        font-size: 25px;
    }      
`

const StayProductive = () => {
  return (
    <div>
            <Stay>
                <DivImg>
                    <ImgStay src='https://res.cloudinary.com/dmaviub4l/image/upload/v1651708380/wszzffnkustwso51of0d.png' alt='illustration-stay-productive'/>
                </DivImg>
                <DivP>
                    <H1>Stay productive, wherever you are</H1>
                    <P>Never let location be an issue when accessing your files. Fylo you covered for all of your life storage needs.</P>
                    <P>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</P>
                    <A href='/'>See how Fylo works <img src='https://res.cloudinary.com/dmaviub4l/image/upload/v1651708378/sxjrk9vmc9zilybo1l9i.svg' alt='icon-arrow' /></A>
                </DivP>
            </Stay>
        </div>
  )
}

export default StayProductive