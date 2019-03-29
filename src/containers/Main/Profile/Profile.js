import React from 'react';
import { StickyContainer, Sticky } from 'react-sticky';
import './Profile.css';

import Header from '../Header/Header';
import About from '../../../components/About/About';
import General from '../../../components/General/General';
import Work from '../../../components/Work/Work';
import Education from '../../../components/Education/Education';
import Footer from '../../../components/Footer/Footer';

const profile = (props) => {
    return (
        // <div className="Profile">
        //     <About aboutData={props.profileData.about} />
        //    // <Skills skillsData={props.profileData.skills} />
        // <General generalData={props.profileData.skills[0].description} heading="Skills" />
        //     <Work workData={props.profileData.work} />
        //     <Education educationData={props.profileData.education} />
        //     <Footer footerData={props.footerData} />
        // </div>

        <StickyContainer>
            <Sticky>
                {({ style }) => <div style={{ ...style }}><Header /></div>}
            </Sticky>
            <div className="Profile">
                <About aboutData={props.profileData.about} />
                <General generalData={props.profileData.skills[0].description} heading="Skills" />
                <Work workData={props.profileData.work} />
                <Education educationData={props.profileData.education} />
                <Footer footerData={props.footerData} />
            </div>
        </StickyContainer>
    );
}

export default profile;