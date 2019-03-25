//import React, { Component } from 'react';
import React from 'react';
import './Profile.css';

import About from '../../../components/About/About';
import Skills from '../../../components/Skills/Skills';
import Work from '../../../components/Work/Work';

//class Start extends Component {
const profile = (props) => {

    return (
        <div className="Profile">
            <About aboutData={props.profileData.about} />
            <Skills skillsData={props.profileData.skills} />
            <Work workData={props.profileData.work} />
        </div>
    );
}
// }

export default profile;