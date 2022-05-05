import React from 'react'
import { Conta, Header } from '../styled/Styled'

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