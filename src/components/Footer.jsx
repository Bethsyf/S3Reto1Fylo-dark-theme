import React from 'react'
import styled from 'styled-components';

export const FooterDiv = styled.div` 
    background-color: hsl(216, 53%, 9%);
    padding-top: 200px;
    padding-bottom: 90px;
    margin-top: -150px;
    
`

export const Conta = styled.div` 
    display: flex;
    margin-left: 40px;
`
export const Conta2 = styled.div` 
    display: flex;   
`
export const Conta3 = styled.div` 
    padding-left: 35px; 
    padding-right: 35px;   
`

export const ImgLogo = styled.img` 
    margin-bottom: 35px;
`

export const I = styled.i` 
    display: flex;
    align-items: center;
    border-radius: 50%;
    padding: 10px;
    margin: 0 7px;
    &:first-child{
    padding: 10px 13px;
    @media screen and (max-width: 750px){
        margin: 5px;
    }
}
`

export const Pfooter = styled.p` 
    padding-right: 20px;
    opacity: 0.8; 
    width: 350px;   
`

export const Redes = styled.ul` 
    padding:0;
    display:grid;
    grid-template-columns: 35px 35px 35px;
    grid-template-rows:35px;
    grid-gap:10px;
    margin-top:25px;    
`

export const LiRedes = styled.li` 
    display:flex;
    justify-content:center;
    align-items:center;
    list-style-type:none;
    cursor: pointer;
    font-size:1.5em;
`

export const ImgRedes = styled.img` 
    width: 40px;
`
export const Ul = styled.ul` 
    padding:0;
	margin:0;
    width:400px;
    
    
`
export const Li = styled.li` 
    padding: 10px;
    list-style-type:none;
    cursor: pointer;
    color:hsl(0, 0%, 100%);

`

const Footer = () => {
    return(

        <FooterDiv>
            <Conta>
                <ImgLogo src='https://res.cloudinary.com/dmaviub4l/image/upload/v1651708377/zigynbcpkdugzjzgaife.svg' alt='logo'/>
                </Conta>
                <Conta>
                    <div>
                        <Conta2>
                            <I ><img src='https://res.cloudinary.com/dmaviub4l/image/upload/v1651708379/nn4hi5se7qrp9kckvwcf.svg' alt='location'/></I>
                            <Pfooter>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</Pfooter>
                        </Conta2>
                    </div>
                    <Conta3>
                        <Conta2>
                            <I><img src='https://res.cloudinary.com/dmaviub4l/image/upload/v1651708379/nl3fa5zklhrrymos3idh.svg' alt='email'/></I>
                            <p>+1-543-123-4567</p>
                        </Conta2>
                        <Conta2>
                            <I ><img src='https://res.cloudinary.com/dmaviub4l/image/upload/v1651708379/cz4zakarjdgvuo6ulamy.svg' alt='email'/></I>
                            <p>example@fylo.com</p>
                        </Conta2>
                    </Conta3>
                    <Ul>
                        <Li href='/'>About Us</Li>
                        <Li href='/'>Jobs</Li>
                        <Li href='/'>Press</Li>
                        <Li href='/'>Blog</Li>
                    </Ul>
                    <Ul>
                        <Li href='/'>Contact Us</Li>
                        <Li href='/'>Terms</Li>
                        <Li href='/'>Privacy</Li>
                    </Ul>
                    <Conta3>
                    <Redes>
                        <LiRedes ><ImgRedes src='https://res.cloudinary.com/dmaviub4l/image/upload/v1652009488/iss2fuv0mvmbhysqxmsu.png' alt='facebook'/></LiRedes>
                        <LiRedes ><ImgRedes src='https://res.cloudinary.com/dmaviub4l/image/upload/v1652009601/psnrw2x6wu4rd7k39hop.png' alt='twitter'/></LiRedes>
                        <LiRedes><ImgRedes src='https://res.cloudinary.com/dmaviub4l/image/upload/v1652009748/ccmwypbzqgjyzizs5kyj.png' alt='facebook'/></LiRedes>
                    </Redes>
                    </Conta3>
                    </Conta>
            
        </FooterDiv>
    );
}

export default Footer