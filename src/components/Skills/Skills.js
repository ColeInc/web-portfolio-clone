import React from 'react';
import { withRouter } from 'react-router-dom';
import './Skills.css';

const skills = (props) => {
    return (
        <section className="Skills">
            <div className="SkillsContainer">
                <div className="paragraph">
                    <h1>{props.name}</h1>
                    <p>{props.desc}</p><br />
                    <h2>Contact</h2>
                    <p>
                        <b>Phone: </b>{props.phone}<br />
                        <b>Email: </b><a href={"mailto:" + props.email}>{props.email}</a>
                    </p>
                </div>
                <div className="imageContainer">
                    {/* <div className="imageDiv" style={{ backgroundImage: `url(${props.photoURL})` }}> */}
                    {/* <img className='image' src={props.photoURL} alt={props.name} /> */}
                    <img className='image' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoB4s4td48GN7aFR8WZl0jnYodZKAb_B-7kGWIPiTFhs38HvDt" alt={props.name} />
                </div>
            </div>
        </section>
    );
}

export default withRouter(skills);