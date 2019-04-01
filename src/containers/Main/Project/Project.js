import React from 'react';
import { StickyContainer, Sticky } from 'react-sticky';
import './Project.css';

import Header from '../Header/Header';
import Heading from '../../../components/Heading/Heading';
import General from '../../../components/General/General';
import Footer from '../../../components/Footer/Footer';

const project = (props) => {
    return (
        // <div className="Profile">
        //     <Heading name={props.projectData.name} author={props.projectData.author} />
        //     {/* <ProjectInfo contentData={props.projectData.summary} /> */}
        //     <General generalData={props.projectData.summary} heading="About the Project" />
        //     <Footer footerData={props.footerData} />
        // </div>

        <StickyContainer>
            <Sticky>
                {({ style }) => <div style={{ ...style }}><Header /></div>}
            </Sticky>
            <div className="Profile">
                <Heading name={props.projectData.name} author={props.projectData.author} />
                {/* <ProjectInfo contentData={props.projectData.summary} /> */}
                <General generalData={props.projectData.summary} heading="About the Project" />
                <Footer footerData={props.footerData} />
            </div>
        </StickyContainer>
    );
}

export default project;