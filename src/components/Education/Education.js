import React from 'react';
import { withRouter } from 'react-router-dom';
import './Education.css';

const education = (props) => {
    return (
        <section className="Education">
            <div className="EducationContainer">
                <div className="EducationParagraph">
                    <h1>Education</h1>
                    <p>{props.educationData[0].description}</p><br /><br />
                </div>
            </div>
        </section>
    );
}

export default withRouter(education);