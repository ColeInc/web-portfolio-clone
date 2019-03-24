import React from 'react';
import { withRouter } from 'react-router-dom';
import './Skills.css';

const skills = (props) => {
    return (
        <section className="Skills">
            <div className="SkillsContainer">
                <div className="skillsParagraph">
                    <h1>Skills</h1>
                    <p>{props.skillsData[0].description}</p><br /><br />
                </div>
            </div>
        </section>
    );
}

export default withRouter(skills);