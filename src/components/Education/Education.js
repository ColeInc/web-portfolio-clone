import React from 'react';
import { withRouter } from 'react-router-dom';
import Qualification from './Qualification/Qualification';
import './Education.css';

const education = (props) => {
    return (
        <section className="Education">
            <div className="EducationContainer">
                <div className="EducationParagraph">
                    <h1>Education</h1><br />
                    {props.educationData.map((qualification, index) => {
                        return (
                            <div>
                                <Qualification qualData={props.educationData[index]} numQual={props.educationData.length} current={index} key={props.educationData[index].institution} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default withRouter(education);