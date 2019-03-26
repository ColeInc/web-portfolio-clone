import React from 'react';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import './Footer.css';

const footer = (props) => {
    return (
        <section className="Footer">
            <div className="FooterContainer">
                <div className="FooterSummary">
                    <p>{props.footerData.footerParagraph}</p>
                    <p style={{ color: '#595959', fontSize: '10pt', marginTop: '5px' }}>&copy; 2019</p>
                </div>
                <div className="FooterAndy">
                    <h1>Andy</h1>
                    <div className="headingUnderline"></div>
                    <a href={"mailto:" + props.footerData.andy.email}><FontAwesomeIcon icon={faEnvelope} /></a>
                    <a href={props.footerData.andy.github}><FontAwesomeIcon icon={faGithub} /></a>
                    <a href={props.footerData.andy.linkedin}><FontAwesomeIcon icon={faLinkedin} /></a>
                </div>
                <div className="FooterCole">
                    <h1>Cole</h1>
                    <div className="headingUnderline"></div>
                    <a href={"mailto:" + props.footerData.cole.email}><FontAwesomeIcon icon={faEnvelope} /></a>
                    <a href={props.footerData.cole.github}><FontAwesomeIcon icon={faGithub} /></a>
                    <a href={props.footerData.cole.linkedin}><FontAwesomeIcon icon={faLinkedin} /></a>
                </div>
            </div>
        </section>
    );
}

export default withRouter(footer);