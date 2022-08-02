import React from 'react'
import '../App.css'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import About from './About'
import Card from '../components/Cards'

function Home() {
    return (
        <div>
            <HeroSection />
            <About />
            <Card />
            <Footer />
        </div>
    )
}

export default Home