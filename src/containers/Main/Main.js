import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

//import Person from './Person/Person';
import Start from './Start/Start';
import About from './About/About';
import './Main.css';

class Main extends Component {
    render() {
        const Andy = {
            name: 'Andy Baeck',
            desc: "Hi I'm Andy.",
            phone: '',
            email: "tbae@auckland",
            photoURL: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
        }

        const Cole = {
            name: 'Cole McConnell',
            desc: "As a recent graduate at the University of Auckland studying a BSc, majoring in Information Systems and Computer Science, I am now seeking to pursue a career in software development with correlation to front-end or back-end web development. I am in search of an environment which enables me to enrich and develop my skill set in this field further, while highlighting my current attributes which include my solid work ethic, love of problem solving, and time management skills.",
            phone: '022 409 6224',
            email: 'cmcc549@aucklanduni.ac.nz',
            photoURL: 'http://i.imgur.com/zdvqdJS.jpg'
        }

        return (
            <div className="Main">
                <header className="Header">
                    <nav>
                        <ul>
                            <Link to="/"><li>Home</li></Link>
                            <Link to={{
                                pathname: '/andy',
                                hash: '', //this is for any hashtag to implement on the end of the URL, E.g. #submit that you sometimes see, etc. I think this is basically jumping to a certain place on a page, E.g. jump to section 4 half way down the page named #section4
                                search: '' //similar to above, this is for any search query parameters, E.g. quick-submit=true that may be helpful in a search function.
                            }}><li>Andy</li>
                            </Link>
                            <Link to={{ pathname: '/cole' }}>
                                <li>Cole</li>
                            </Link>
                            <Link to={{ pathname: '/project' }}>
                                <li>Project</li>
                            </Link>
                        </ul>
                    </nav>
                </header>
                <Route path="/" exact component={Start} />
                {/* <Route path="/andy" exact render={() => <About name={andy} />} /> */}
                <Route path="/andy" exact render={() => <About name={Andy.name} desc={Andy.desc} phone={Andy.phone} email={Andy.email} />} />
                <Route path="/cole" exact render={() => <About name={Cole.name} desc={Cole.desc} phone={Cole.phone} email={Cole.email} />} />
                {/* <Route path="/project" exact component={} /> */}
                {/* <Route path="/" render={() => <p>Test</p>} /> */}
            </div>
        );
    }
}

export default Main;