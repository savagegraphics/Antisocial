import React from 'react'
import './About.css'

function About() {
    return (
        <div className='about'>
            <div className='about-me'>
                <h1 className='about-title'>
                    About ME
                </h1>
                <p>
                    Aspiring Fullstack Web Developer Based in Lagos Nigeria.
                    I build Websites and writes good codes in Javascripts and React, currently working on couple project in order to build my portfolios and CVs
                    so I can put my Worthy Brand on the map and bring the best version of me as a Developer..
                </p>

                <p>
                    To be very precise at this point, I make websites inpendently from scratch and I believe I also I've what it takes to work with team of Developers and other stacks in tech so I can influence my career as a Developer and also
                    I believe I can be a great and supportive teammate that can put everything in the process of being a productive Developer...
                </p>

            </div>

            <div className='stacks'>
                <h2 className='about-title'>My Stacks</h2>

                <li>HTML <i className='fab fa-html5' /></li>
                <li>CSS <i className='fab fa-css3' /></li>
                <li>JAVASCRIPT <i className='fab fa-js' /></li>
                <li>NODE JS <i className='fab fa-node js' /></li>
                <li>SQL <i className='fab fa-sql' /></li>
                <li>MONGO DB <i className='fab fa-mongodb' /></li>
                <li>GIT, GITHUB  <i className='fab fa-github' /></li>
                <li>REACT JS   <i className='fab fa-react' /></li>
            </div>



        </div>
    )
}

export default About