import React from 'react';

import './Person.css';
import Radium from 'radium';

const person = (props) => {
    const style = {
        '@media (min-width: 800px)': {
            width: '650px'
        }
    }

    return (
        <div className="Person" style={style}>
            <p onClick={props.click}>This is a Person Component: This person is called {props.name}, and they own a {props.pet}.</p> {/* can also mess around with this: {Math.round(Math.random()*10)} is {Math.round(Math.random()*100)} years old*/}
            <p>Description of Pet: {props.children}</p>
            <input type="input" onChange={props.changed} value={props.name} />
        </div>
    )
};

export default Radium(person);