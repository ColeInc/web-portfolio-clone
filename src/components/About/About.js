//import React, { Component } from 'react';
import React from 'react';
import { withRouter } from 'react-router-dom';
import './About.css';

//class Start extends Component {
const about = (props) => {

    //render() {
    // console.log(props)

    return (
        <section className="About">
            <div className="AboutContainer">
                <div className="paragraph">
                    <h1>{props.aboutData[0].name}</h1>
                    <p>{props.aboutData[0].desc}</p><br />
                    <h2>Contact</h2>
                    <p>
                        <b>Phone: </b>{props.aboutData[0].phone}<br />
                        <b>Email: </b><a href={"mailto:" + props.aboutData[0].email}>{props.aboutData[0].email}</a>
                    </p>
                </div>
                <div className="imageContainer">
                    {/* <div className="imageDiv" style={{ backgroundImage: `url(${props.photoURL})` }}> */}
                    {/* <img className='image' src={props.photoURL} alt={props.name} /> */}
                    <img className='image' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoB4s4td48GN7aFR8WZl0jnYodZKAb_B-7kGWIPiTFhs38HvDt" alt={props.aboutData[0].name} />
                </div>
            </div>
        </section>
    );
}
// }

export default withRouter(about);