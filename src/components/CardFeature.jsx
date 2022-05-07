import React from 'react'
import styled from 'styled-components'

export const Card = styled.div` 
    flex: 0.4;
    text-align: center;
    margin: 0 40px 100px 40px;
    @media screen and (max-width: 950px){
        flex: 0.5;
        margin: 0 40px 100px 40px;
        } 
        &:not(:first-child){
            margin-top: 62px;
        }
    `
export const H2 = styled.h2` 
    font-size: 19px;
    font-weight: bold;
    margin: 10px 0;
    @media screen and (max-width: 750px){
      font-size: 2.2rem;
      margin: 20px 0;
        }  
`
export const P = styled.p` 
    opacity: .8;
    font-size: 15px;
    padding: 0 15px;
    @media screen and (max-width: 950px){
      padding: 0;
        }  
    @media screen and (max-width: 950px){
      font-size: 27px;
      line-height: 41px;
        }  

`

const CardFeature = ({ img, head, text }) => {
  return (
    <Card>
      <img src={img} alt='img' />
      <H2>{head}</H2>
      <P>{text}</P>
    </Card>
  )
}

export default CardFeature