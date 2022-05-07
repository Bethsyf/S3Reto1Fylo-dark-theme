import React from 'react'
import styled from 'styled-components'
import CardTestimonial from './CardTestimonial'

export const Testi2 = styled.div` 
    margin-top: 150px;
    display: flex;
    
    @media screen and (max-width: 950px) {
        flex-wrap: wrap;
    }
    @media screen and (max-width: 750px){
        margin-top: 280px;
       
        padding: 20px;
    }
`

const Testimonial = () => {
    return(
        <div>
            <Testi2>
                <CardTestimonial
                    text='Fylo has improved our team productivity by an order of magnitude. Since making the Switch our team has become a well-oiled collaboration machine.'
                    img='https://res.cloudinary.com/dmaviub4l/image/upload/v1651708377/csamef3lqilvrp6fqvsi.jpg'
                    user='Satish Patel'
                    job='Founder & CEO, Huddle'
                />
                <CardTestimonial
                    text='Fylo has improved our team productivity by an order of magnitude. Since making the Switch our team has become a well-oiled collaboration machine.'
                    img='https://res.cloudinary.com/dmaviub4l/image/upload/v1651708377/bscxsbpalvuixuwdjngc.jpg'
                    user='Bruce Mckenzie'
                    job='Founder & CEO, Huddle'
                />
                <CardTestimonial
                    text='Fylo has improved our team productivity by an order of magnitude. Since making the Switch our team has become a well-oiled collaboration machine.'
                    img='https://res.cloudinary.com/dmaviub4l/image/upload/v1651708377/x1vg2uhbsp94duqmt2sh.jpg'
                    user='Iva Boyed'
                    job='Founder & CEO, Huddle'
                />
            </Testi2>
        </div>
    )
}

export default Testimonial