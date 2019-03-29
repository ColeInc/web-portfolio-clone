import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import './Home.css';

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <div className="andySide">
                    <h2>WEB PORTFOLIO</h2>
                    <Link to={{ pathname: '/andy' }}>
                        <span className="andyButton">
                            <h1>Andy</h1>
                            <div className="nameUnderline"></div>
                        </span>
                    </Link>
                    <span id="placeholder"></span>
                </div>
                <div className="coleSide">
                    <Link to={{ pathname: '/cole' }}>
                        <span className="coleButton">
                            <h1>Cole</h1>
                            <div className="nameUnderline"></div>
                        </span>
                    </Link>
                    <span id="placeholder"></span>
                </div>
                <div className="buttonContainer">
                    <a href="#general"><span className="transitionButton"><FontAwesomeIcon icon={faChevronDown} /></span></a>
                </div>
            </div>
        );
    }
}

export default Home;