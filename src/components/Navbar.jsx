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

const Navbar = () => {
    return (
        <>
            <Header>
                <div>
                    <img src='https://res.cloudinary.com/dmaviub4l/image/upload/v1651708377/zigynbcpkdugzjzgaife.svg' alt='logo' />
                </div>
                <Conta>
                    <a href="#">Features</a>
                    <a href="#">Team</a>
                    <a href="#">Sign In</a>
                </Conta>
            </Header>
        </>
    )
}

export default Navbar