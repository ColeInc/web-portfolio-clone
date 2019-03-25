import React from 'react';
import { withRouter } from 'react-router-dom';
import './Qualification.css';

const qualification = (props) => {
    return (
        <div className="Qualification">
            <h1>{props.qualData.institution}</h1>

            {props.qualData.qualification.map((qual, index) => {
                return <p className="qualificationList">{qual}</p>
            })}
            <p><b>Date: </b>{props.qualData.date}</p>

            {props.current + 1 === props.numQual ? <br /> : <div className="separator"></div>} {/* This is just a condition statement to put a break line between every component apart from the last (doesn't need one) */}
        </div>
    );
}

export default withRouter(qualification);