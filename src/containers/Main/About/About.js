//import React, { Component } from 'react';
import React from 'react';
import './About.css';

//class Start extends Component {
const start = (props) => {

    //render() {
        return (
            <div className="About">
                <div className="paragraph">
                    <h1>{props.name}</h1>
                    <p>{props.desc}</p>
                </div>
                <div className="imageDiv" style={{ backgroundImage: `url(${props.photoURL})` }}>
                    <img className='image' src={props.photoURL} alt={props.name} />
                </div>
            </div>
        );
    }
// }

export default start;