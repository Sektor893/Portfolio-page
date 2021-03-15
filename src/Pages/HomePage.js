import React from 'react';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';

function HomePage() {

       
    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Hi, I am 
                    <span> Strahinja Djordjevic</span>
                </h1>
                <p className="h-sub-text">
                Love bringing designs to life and creating beautiful, usable experiences for all users.
                </p>
                <div className="icons">
                    <Link to="#" className="icon-holder">
                        <FontAwesomeIcon icon={faFacebook} className="icon fb" />
                        <a target="_blank" href="https://www.facebook.com/sektor893/" />
                    </Link>
                    <Link to="#" className="icon-holder">
                        <FontAwesomeIcon icon={faGithub} className="icon gh" />
                    </Link>
                </div>
            </header>
        </div>
    )
}

export default HomePage;
