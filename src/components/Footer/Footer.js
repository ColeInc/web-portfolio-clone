import React from 'react';
import { withRouter } from 'react-router-dom';
import './Footer.css';

const footer = (props) => {
    const Footer = {
        footerParagraph: "This website was designed and developed by Cole McConnell and {}, using the React Javascript Library."
    }

    return (
        <section className="Footer">
            <div className="FooterContainer">
                <div className="FooterSummary">
                    <p>{Footer.footerParagraph}</p>
                </div>
                <div className="FooterAndy">
                    <h1>Andy:</h1>
                    <p>include symbol links to email, linkedIn, and github here</p>
                </div>
                <div className="FooterCole">
                    <h1>Cole:</h1>
                    <p>include symbol links to email, linkedIn, and github here</p>
                </div>
            </div>
        </section>
    );
}

export default withRouter(footer);