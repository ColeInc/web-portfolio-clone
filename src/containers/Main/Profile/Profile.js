import React from 'react';
import './Profile.css';

import About from '../../../components/About/About';
import Skills from '../../../components/Skills/Skills';
import Work from '../../../components/Work/Work';
import Education from '../../../components/Education/Education';
import Footer from '../../../components/Footer/Footer';

const profile = (props) => {

    return (
        <div className="Profile">
            <About aboutData={props.profileData.about} />
            <Skills skillsData={props.profileData.skills} />
            <Work workData={props.profileData.work} />
            <Education educationData={props.profileData.education} />
            <Footer footerData={props.footerData} />
        </div>
    );
}

export default profile;