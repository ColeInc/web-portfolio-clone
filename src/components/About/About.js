import React from 'react';
import { withRouter } from 'react-router-dom';
import './About.css';

const about = (props) => {
    const defaultPic = require('../../Images/default.jpg')
    const imageSrc = props.aboutData[0].photoURL.length > 0 ? props.aboutData[0].photoURL : defaultPic

    return (
        <section className="About">
            <div className="AboutContainer">
                <div className="paragraph">
                    <h1>{props.aboutData[0].name}</h1>
                    <div className="headingUnderline"></div>
                    <p>{props.aboutData[0].desc}</p><br />
                    <h2>Contact</h2>
                    <p>
                        <b>Phone: </b>{props.aboutData[0].phone}<br />
                        <b>Email: </b><a href={"mailto:" + props.aboutData[0].email}>{props.aboutData[0].email}</a>
                    </p>
                </div>
                <div className="imageContainer">
                    <img className='image' src={imageSrc} alt={props.aboutData[0].name} />
                </div>
            </div>
        </section>
    );
}
// }

export default withRouter(about);