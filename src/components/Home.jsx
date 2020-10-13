import React from 'react';
import '../styles/Home.css';

export default function Home() {
    return (
        <div className="homeBackground">
            <img src={require('../images/craftsman.jpg')} className="homeImage"alt="Home-picture"/>
         <h1>The world's most famous beers!</h1>
         <p>A platform designed for you,<br/>to search for your favourite cold ones! </p>
        </div>
    )
}