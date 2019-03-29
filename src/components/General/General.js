import React from 'react';
import { withRouter } from 'react-router-dom';
import './General.css';

const general = (props) => {
    return (
        <section className="General" id="general">
            <div className="GeneralContainer">
                <div className="GeneralParagraph">
                    <h1>{props.heading}</h1>
                    {props.generalData.map((paragraph, index) => {
                        return (
                            <div>
                                {/* <p key={props.generalData[index]}>{paragraph}</p> */}
                                {console.log(paragraph.slice(-2))}
                                {paragraph.slice(-2) === "xx" ? <div><p key={props.generalData[index]}>{paragraph.substr(0, paragraph.length-2)}</p><br /></div> : <p key={props.generalData[index]}>{paragraph}</p>}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default withRouter(general);