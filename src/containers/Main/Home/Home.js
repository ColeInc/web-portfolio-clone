import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <Link to={{pathname: '/andy'}}>
                    <span className="HomeButton">
                        <h1>Andy</h1>
                    </span>
                </Link>
                <Link to={{pathname: '/cole'}}>
                    <span className="HomeButton">
                        <h1>Cole</h1>
                    </span>
                </Link>

                <section className="Content">
                    <h1>This is the Introductory Page</h1>
                    <p>I plan to eventually have two sides of the page split, named Cole and Andy, and from there users can click on either side and it will bring them to the desired page.</p>
                </section>
            </div>
        );
    }
}

export default Home;