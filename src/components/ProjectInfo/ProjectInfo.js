import React from 'react';
import { withRouter } from 'react-router-dom';
import './ProjectInfo.css';

const projectInfo = (props) => {
    return (
        <section className="ProjectInfo">
            <div className="ProjectInfoContainer">
                <div className="ProjectInfoParagraph">
                    <h1>About</h1>
                    <p>{props.contentData}</p><p style={{color:'black'}}><br />To be continued...</p><br /><br />
                </div>
            </div>
        </section>
    );
}

export default withRouter(projectInfo);