import React from 'react';
import { withRouter } from 'react-router-dom';
import './Position.css';

const position = (props) => {
    return (
        <div className="Position">
            {/* {console.log(props)} */}
            <h1>{props.positionData.company}</h1>
            <h2>{props.positionData.position} ({props.positionData.date})</h2>
            <p>{props.positionData.summary}</p>
            <p>
                <b>Employer: </b>{props.positionData.employer}<br />
                <b>Business Type: </b>{props.positionData.businessSector}<br />
                <b>Location: </b>{props.positionData.location}
            </p><br />
            <div className="separator"></div><br /><br />
        </div>
    );
}

export default withRouter(position);