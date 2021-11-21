import React from 'react'
import Features from './features/Features'
import Footer from './Footer'
import Header from './Header'
import Navbar from './Navbar'
import Purchase from './Purchase'
import Testimonials from './Testimonials'
import { Section } from "react-scroll-section"


const Main=()=> {
    return (
        <div>
            <Navbar/>
            <Section id="home">
                <Header/>
            </Section>
            <Section id="feature_section">
                <Features/>
            </Section>

            <Section id="testimonial_section">
                <Testimonials/>
            </Section>
            <Section id="purchase_section">
                <Purchase/>
            </Section>
            <Footer/>
        </div>
    )
}

export default Main
