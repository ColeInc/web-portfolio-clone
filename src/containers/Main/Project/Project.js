import React from 'react';
import './Project.css';

import Heading from '../../../components/Heading/Heading';
import ProjectInfo from '../../../components/ProjectInfo/ProjectInfo';
import Footer from '../../../components/Footer/Footer';

const project = (props) => {
    return (
        <div className="Profile">
            <Heading name={props.projectData.name} author={props.projectData.author} />
            <ProjectInfo contentData={props.projectData.summary} />
            <Footer footerData={props.footerData} />
        </div>
    );
}

export default project;