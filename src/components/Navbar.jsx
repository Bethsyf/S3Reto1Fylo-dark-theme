import React from 'react'
import styled from "styled-components";

export const Header = styled.div` 
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 73px;   
` 
export const Conta = styled.div` 
    display: flex;
    justify-content: center;
    align-items: center;    
` 
export const A = styled.a` 
    color:white;
    list-style-type:none;
    text-decoration:none;
    padding:30px 30px;
    display:inline-block;    
` 

const Navbar = () => {
    return (
        <>
            <Header>
                <div>
                    <img src='https://res.cloudinary.com/dmaviub4l/image/upload/v1651708377/zigynbcpkdugzjzgaife.svg' alt='logo' />
                </div>
                <Conta>
                    <A href="#">Features</A>
                    <A href="#">Team</A>
                    <A href="#">Sign In</A>
                </Conta>
            </Header>
        </>
    )
}

export default Navbar