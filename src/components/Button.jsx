import React from 'react'
import styled from 'styled-components'

export const Btn = styled.button` 
background-image: linear-gradient(to right, hsl(176, 68%, 64%) ,hsl(198, 60%, 50%));
width: 280px;
height: 55px;
border: none;
border-radius: 40px;
color: #fff;
font-size: 16px;
font-weight: bold;      
`

const Button = ({text}) => {
  return (
    <Btn>{text}</Btn>
  )
}

export default Button