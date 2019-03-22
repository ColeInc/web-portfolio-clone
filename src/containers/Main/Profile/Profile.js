//import React, { Component } from 'react';
import React from 'react';
import './Profile.css';

import About from '../../../components/About/About';

//class Start extends Component {
const profile = (props) => {

    return (
        <div className="Profile">
            <About profileData={props.profileData} />
        </div>
    );
}
// }

export default profile;