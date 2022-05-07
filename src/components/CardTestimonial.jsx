import React from 'react'
import styled from 'styled-components'

export const Testi = styled.div` 
    background-color: hsl(219, 30%, 18%);
    padding: 40px 25px 25px 25px;
    margin: 20px;
    box-shadow: 3px 3px 7px hsl(0deg 0% 17%);
    margin-top: 35px;   
    &:first-child{
        margin-left: 8px;
    }
    @media screen and (max-width: 950px) {
        width: 295px;
    }
    @media screen and (max-width: 750px){
        width: 500px;
        margin: 20px auto;
        padding: 45px;
    }
`

export const PTesti = styled.p` 
    opacity: 0.8;
    font-size: 16px;
    &:last-child{
    font-size: 11px;
    @media screen and (max-width: 750px){
        font-size: 21px;
        line-height: 35px;
        &:first-child {
        margin: 20px auto;
    }
        &:last-child{
        font-size: 19px;
        letter-spacing: 2px;
    }
    }
}
`

export const User = styled.div` 
    margin-top: 25px;
    display: flex;
    align-items: center;
`

export const ImgUser = styled.img` 
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: none;
    @media screen and (max-width: 750px){
        width: 50px;
        height: 50px;        
    }
`

export const TUser = styled.div` 
    margin-left: 10px;    
`

const CardTestimonial = ({text,img,user,job}) => {
    return(
        <Testi>
            <PTesti>{text}</PTesti>
            <User>
                <ImgUser src={img} alt='user' />
                <TUser >
                    <h5>{user}</h5>
                    <p>{job}</p>
                </TUser>
            </User>
        </Testi>
    )
}

export default CardTestimonial;