// import React, { Component } from 'react';
// import { Route, Link, withRouter } from 'react-router-dom';
// import Radium, { StyleRoot } from 'radium';

// import './Person.css';


// // const person = (props) => {
// //     const style = {
// //         '@media (min-width: 800px)': {
// //             width: '650px'
// //         }
// //     }


// class Person extends Component {
//     state = {
//         persons: [ //this is an array we are declaring inside state.
//             { id: '1', name: 'Cole', pet: 'Pug' },
//             { id: '2', name: 'Summer', pet: 'Holly' },
//             { id: '3', name: 'Reidy', pet: 'italian woG' }
//         ]
//     }

//     mainButtonHander = (newName) => {
//         //alert("Thank you for clicking me sir.");
//         this.setState({
//             persons: [
//                 { name: 'Cole', pet: 'Goldfish' },
//                 { name: 'Summer', pet: 'Big Momma' },
//                 { name: newName, pet: 'miloaf' }
//             ],
//             secondState: 'This is a second state (I have no idea why this is defined!)',
//             showPersons: false
//         })
//     }

//     nameChangeHandler = (event, id) => {
//         const personIndex = this.state.persons.findIndex(p => {
//             return p.id === id;
//         });

//         const person = {
//             ...this.state.persons[personIndex]
//         };

//         person.name = event.target.value;

//         const persons = [...this.state.persons];
//         persons[personIndex] = person;

//         this.setState({ persons: persons })

//         //old way of doing it before dynamic updating in the render():

//         // this.setState({
//         //     persons: [
//         //         {name: 'Cole', pet: 'Pug'},
//         //         {name: event.target.value, pet: 'Holly'},
//         //         {name: 'Reidy', pet: 'italian woG'}
//         //     ]
//         // })
//     }

//     togglePersonsVisibleHandler = () => {
//         const doesShow = this.state.showPersons;
//         this.setState({ showPersons: !doesShow }); //just toggling true/false on showPersons boolean in state.
//     }

//     deletePersonHandler = (index) => {
//         //const persons = this.state.persons.slice();
//         const persons = [...this.state.persons]; //this works exact same as above line but is the most modern ES6 way of doing things.
//         persons.splice(index, 1) //just removes the single array element at index value passed in
//         this.setState({ persons: persons })
//     }

//     // const classes = [];

//     // if(this.state.persons.length < 3) {
//     //     classes.push('red')
//     // }
//     // if(this.state.persons.length < 2) {
//     //     classes.push('bold') //so basically we are legit just adding values to this class which are going to be id's of CSS effects we want to add onto the button.
//     // }

//     const style = {
//         backgroundColor: 'grey',
//         color: 'white',
//         font: 'inherit',
//         width: '200px',
//         cursor: 'pointer',
//         border: '1px solid black',
//         align: 'center',
//         padding: '8px',
//         ':hover': {
//             backgroundColor: 'lightgrey',
//             color: 'black'
//         }
//     };

//     // style.backgroundColor = 'black';
//     // style[':hover'] = {
//     //     backgroundColor: 'darkgrey',
//     //     color: 'black'
//     // };
// // }

// render() {
//     let persons = null;

//     if (this.state.showPersons) {
//         persons = (
//             <div>
//                 {this.state.persons.map((person, index) => {
//                     return <Person
//                         name={person.name}
//                         pet={person.pet}
//                         click={() => this.deletePersonHandler(index)}
//                         key={person.id}
//                         changed={(event) => this.nameChangeHandler(event, person.id)} />
//                 })}
//             </div>
//         );
//     }

//     return (
//         <StyleRoot>
//             <div className="Person" style={style}>
//                 <p onClick={props.click}>This is a Person Component: This person is called {props.name}, and they own a {props.pet}.</p> {/* can also mess around with this: {Math.round(Math.random()*10)} is {Math.round(Math.random()*100)} years old*/}
//                 <p>Description of Pet: {props.children}</p>
//                 <input type="input" onChange={props.changed} value={props.name} />

//                 <section className="Content">
//                     <h1>Hello there</h1>
//                     <p>its ya boy cole here</p>
//                     <button
//                         className={style}
//                         onClick={this.togglePersonsVisibleHandler}
//                         style={style}>Click me!
//                             </button>
//                     {/* {persons} */}
//                 </section>
//             </div>
//         </StyleRoot>
//     )
// };
// }

// export default withRouter(person);