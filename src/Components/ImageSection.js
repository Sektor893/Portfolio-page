import React from 'react';
import about from '../img/avatar.png';

function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt=""/>
            </div>
            <div className="about-info">
                <h4>I am<span> Strahinja Djordjevic</span></h4>
                <p className="about-text">
                Junior front-end developer looking for a role where I can grow and learn from other experienced
                people. Proficient in HTML, CSS, Wordpress, PHP, Typescript, JavaScript using a modern library such as React JS. Love
                bringing designs to life and creating beautiful, usable experiences for all users.
                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Address</p>
                        <p>Countries</p>
                    </div>
                    <div className="right-section">
                        <p>: Strahinja Djordjevic</p>
                        <p>: 27</p>
                        <p>: Serbian</p>
                        <p>: Serbian,English</p>
                        <p>: Pavla Ivica 3,Novi Sad </p>
                        <p>: Serbia</p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default ImageSection;
