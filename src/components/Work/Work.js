import React from 'react';
import { withRouter } from 'react-router-dom';
import Position from './Position/Position';
import './Work.css';

const work = (props) => {
    return (
        <section className="Work">
            <div className="WorkContainer">
                <div className="WorkParagraph">
                    <h1>Work Experience</h1><br />
                    {props.workData.map((position, index) => {
                        return <Position positionData={props.workData[index]} numPosition={props.workData.length} current={index} />
                    })}
                </div>
            </div>
        </section>
    );
}

export default withRouter(work);