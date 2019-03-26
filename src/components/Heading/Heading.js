import React from 'react';
import { withRouter } from 'react-router-dom';
import './Heading.css';

const heading = (props) => {
    return (
        <section className="Heading">
            <div className="HeadingContainer">
                <div className="HeadingParagraph">
                    <h1>{props.name}</h1>
                    <div className="headingUnderline"></div>
                    <p>{props.author}</p>
                </div>
            </div>
        </section>
    );
}

export default withRouter(heading);