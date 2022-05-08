import React from 'react'
import styled from 'styled-components'
import CardFeature from './CardFeature'

export const Cont = styled.div` 
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: -35px;
    z-index: 12;
    margin-top: 60px;
    position: relative;
    @media screen and (max-width: 750px){
        flex-direction: column;        
    } 
`


const Features = () => {
  return (
  <>
    <div >
            <div >
                <Cont >
                    <CardFeature 
                    img='https://res.cloudinary.com/dmaviub4l/image/upload/v1651708378/m0fcx9kve5koywqazfy7.svg'
                    head='Access your files, anywhere'
                    text='The ability to use a Smartphone, tablet, Or Computer to access your account means your files follow you everywhere.'
                    />
                    <CardFeature 
                    img='https://res.cloudinary.com/dmaviub4l/image/upload/v1651708380/ixyhs1kwrazwoxofghhv.svg'
                    head='Security you can trust'
                    text='2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.'
                    />
                </Cont>
                <Cont >
                    <CardFeature 
                    img='https://res.cloudinary.com/dmaviub4l/image/upload/v1651708378/nee78luqqbkwe7nv7nab.svg'
                    head='Real-time collaboration'
                    text='Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.'
                    />
                    <CardFeature
                    img='https://res.cloudinary.com/dmaviub4l/image/upload/v1651708378/p8yxmzlkvyt3guhiv9sv.svg'
                    head='Store any type of file'
                    text='Whetjer youre sharing holidays photos or work documents, Fylo has you covered allowing all file types to be securely stored and shared.'
                    />
                </Cont>
            </div>
        </div>
        </>
  )
}

export default Features