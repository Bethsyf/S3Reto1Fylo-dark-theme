import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const FooterDiv = styled.div` 
    background-color: hsl(216, 53%, 9%);
    padding-top: 200px;
    padding-bottom: 90px;
    margin-top: -150px;
`

export const Conta = styled.div` 
    display: flex;
`

export const ImgLogo = styled.img` 
    margin-bottom: 35px;
`

export const I = styled.i` 
    border-radius: 50%;
    border: 1px solid white;
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
`

export const A = styled.a` 
    opacity: 0.8;
`

const Footer = () => {
    return(
        <FooterDiv>
            <Conta>
                <ImgLogo src='https://res.cloudinary.com/dmaviub4l/image/upload/v1651708377/zigynbcpkdugzjzgaife.svg' alt='logo'/>
                <div>
                    <div>
                        <div>
                            <I class="fa fa-map-marker fa-lg" aria-hidden="true"></I>
                            <Pfooter>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</Pfooter>
                        </div>
                    </div>
                    <div className='footer-section sec-2'>
                        <div className='footer-flex'>
                            <i class="fa fa-phone fa-lg" aria-hidden="true"></i>
                            <p>+1-543-123-4567</p>
                        </div>
                        <div className='footer-flex'>
                            <i class="fa fa-envelope fa-lg" aria-hidden="true"></i>
                            <p>example@fylo.com</p>
                        </div>
                    </div>
                    <div className='footer-section sec-3'>
                        <A href='/'>About Us</A>
                        <A href='/'>Jobs</A>
                        <A href='/'>Press</A>
                        <A href='/'>Blog</A>
                    </div>
                    <div className='footer-section sec-4'>
                        <A href='/'>Contact Us</A>
                        <A href='/'>Terms</A>
                        <A href='/'>Privacy</A>
                    </div>
                    <div className='footer-section sec-5'>
                    <div className='footer-flex mobile-center'>
                        <i class="fa fa-facebook" aria-hidden="true"></i>
                        <i class="fa fa-twitter" aria-hidden="true"></i>
                        <i class="fa fa-instagram" aria-hidden="true"></i>
                    </div>
                    </div>
                </div>
            </Conta>
        </FooterDiv>
    );
}

export default Footer