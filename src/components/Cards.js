import React from 'react';
import './Cards.css';
import CardImage from "../assets/responsive.png"
import CardImage1 from "../assets/codepic.png"
import CardImage2 from "../assets/reactjs.svg"
import CardImage3 from "../assets/ecommerce.png"
import CardImage4 from "../assets/Restful.png"
import CardItem from './CardItem';

function Cards() {
    return (
        <div className='cards'>
            <h1>SERVICES WE OFFER</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src={CardImage}
                            text='Developing and Implementing highly responsive user interface components using react concepts..'
                            label='Responsiveness'
                            path='/cards'
                        />
                        <CardItem
                            src={CardImage2}
                            text='Thorough Understanding and Experience In Reactjs and its core principle with common frontend tools such as Babel, Webpack, NPM, etc...'
                            label='React Certified'
                            path='/cards'
                        />

                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src={CardImage1}
                            text='Familiarity and Experience with Code Versioning tools {such as GIT, GITHUB, SVN, etc.}'
                            label='Version Control'
                            path='/cards'
                        />

                        <CardItem
                            src={CardImage3}
                            text='Ability to understand business ideas, requirements and translate them into technical requirements'
                            label='E-Commerce'
                            path='/cards'
                        />
                        <CardItem
                            src={CardImage4}
                            text='Knowledge and familiarity with RESTful APIs ans modern authorization mechanisms such as JSON Web Token'
                            label='RESTful & JSON'
                            path='/cards'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;