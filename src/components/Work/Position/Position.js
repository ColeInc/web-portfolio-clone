import React from 'react';
import { withRouter } from 'react-router-dom';
import './Position.css';

const position = (props) => {
    return (
        <div className="Position">
            <h1>{props.positionData.company}</h1>
            <h2>{props.positionData.position} ({props.positionData.date})</h2>
            <p>{props.positionData.summary}</p>
            <p>
                <b>Employer: </b>{props.positionData.employer}<br />
                <b>Business Type: </b>{props.positionData.businessSector}<br />
                <b>Location: </b>{props.positionData.location}
            </p>
            {props.current + 1 === props.numPosition ? <br /> : <div className="separator"></div>} {/* This is just a condition statement to put a break line between every component apart from the last (doesn't need one) */}
        </div>
    );
}

export default withRouter(position);