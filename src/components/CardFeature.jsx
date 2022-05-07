import React from 'react'
import styled from 'styled-components'

export const Card = styled.div` 
flex: 0.4;
text-align: center;
margin: 0 40px 100px 40px;
`
export const H2 = styled.h2` 
font-size: 19px;
font-weight: bold;
margin: 10px 0;
`
export const P = styled.p` 
opacity: .8;
font-size: 15px;
padding: 0 15px;

`

const CardFeature = ({img,head,text}) => {
  return (
    <Card>
            <img src={img} alt='img'/>
            <H2>{head}</H2>
            <P>{text}</P>
        </Card>
  )
}

export default CardFeature