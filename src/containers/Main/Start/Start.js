import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './Start.css';

class Start extends Component {
    render() {
        return (
            <div className="Start">
                <Link to={{pathname: '/andy'}}>
                    <span className="StartButton">
                        <h1>Andy</h1>
                    </span>
                </Link>
                <Link to={{pathname: '/cole'}}>
                    <span className="StartButton">
                        <h1>Cole</h1>
                    </span>
                </Link>

                <section className="Content">
                    <h1>This is the Startup Page</h1>
                    <p>I plan to eventually have two sides of the page split, named Cole and Andy, and from there users can click on either side and it will bring them to the desired page.</p>
                </section>
            </div>
        );
    }
}

export default Start;