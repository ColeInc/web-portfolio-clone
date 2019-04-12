import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import './Home.css';

class Home extends Component {
    render() {
        return (
            <section className="Home" id="home">
                <div className="andySide">
                    <div className="MainHeading"><Link to="/"><h2>WEB PORTFOLIO</h2></Link></div>
                    <div className="titleUnderline"></div>
                    <Link to={{ pathname: '/andy' }}>
                        <span className="andyButton">
                            <h1>Andy</h1>
                            <div className="nameUnderline"></div>
                        </span>
                    </Link>
                    <span id="placeholder"></span>
                </div>
                <div className="coleSide">
                <div className="aboutLink"><Link to="/project"><h3>ABOUT</h3></Link></div>
                <div className="linkUnderline"></div>
                    <Link to={{ pathname: '/cole' }}>
                        <span className="coleButton">
                            <h1>Cole</h1>
                            <div className="nameUnderline"></div>
                        </span>
                    </Link>
                    <span id="placeholder"><div className="author"><p>Designed by Cole McConnell.</p></div></span>
                    
                </div>
                <div className="buttonContainer">
                    <a href="#general"><span className="transitionDown"><FontAwesomeIcon icon={faChevronDown} /></span></a>
                </div>
                <div className="buttonContainer">
                    <a href="#home"><span className="transitionUp"><FontAwesomeIcon icon={faChevronUp} /></span></a>
                </div>
            </section>
        );
    }
}

export default Home;