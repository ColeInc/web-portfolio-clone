//import React, { Component } from 'react';
import React from 'react';
import './Profile.css';

import About from '../../../components/About/About';
import Skills from '../../../components/Skills/Skills';

//class Start extends Component {
const profile = (props) => {

    return (
        <div className="Profile">
            <About aboutData={props.profileData.about} />
            <Skills skillsData={props.profileData.skills} />
        </div>
    );
}
// }

export default profile;