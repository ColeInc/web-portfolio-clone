import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { StickyContainer, Sticky } from 'react-sticky';

import Home from './Home/Home';
import Profile from './Profile/Profile';
import Project from './Project/Project';
import Header from './Header/Header';
import './Main.css';

class Main extends Component {
    render() {
        const Layout = {
            'about': [{
                name: '',
                desc: '',
                phone: '',
                email: '',
                // photoURL: require('../../Images/{ PHOTONAMEHERE }.jpg')
            }],
            "skills": [{
                description: ""
            }],
            "work": [{
                company: '',
                position: '',
                location: '',
                date: '',
                employer: '',
                businessSector: '',
                summary: ""
            }, {
                company: '',
                position: '',
                location: '',
                date: '',
                employer: '',
                businessSector: '',
                summary: ""
            }],
            "education": [{
                institution: '',
                qualification: [
                    '',
                    '',
                    ''
                ],
                date: ''
            }, {
                institution: '',
                qualification: [
                    '',
                    '',
                    ''
                ],
                date: ''
            }]
        }

        const Andy = {
            "about": [{
                name: 'Andy Baeck',
                desc: "Hi I'm Andy.",
                phone: '',
                email: 'hamento22@outlook.co.nz',
                photoURL: require('../../Images/andy.jpg')
            }],
            "skills": [{
                description: "This is a description of my skillset."
            }],
            "work": [{
                company: '',
                position: '',
                location: '',
                date: '',
                employer: '',
                businessSector: '',
                summary: ""
            }, {
                company: '',
                position: '',
                location: '',
                date: '',
                employer: '',
                businessSector: '',
                summary: ""
            }],
            "education": [{
                institution: '',
                qualification: [
                    '',
                    '',
                    ''
                ],
                date: ''
            }, {
                institution: '',
                qualification: [
                    '',
                    '',
                    ''
                ],
                date: ''
            }]
        }

        const Cole = {
            'about': [{
                name: 'Cole McConnell',
                desc: 'As a recent graduate at the University of Auckland studying a BSc, majoring in Information Systems and Computer Science, I am now seeking to pursue a career in software development with correlation to front-end or back-end web development. I am in search of an environment which enables me to enrich and develop my skill set in this field further, while highlighting my solid work ethic, love of problem solving, and time management skills.',
                phone: '022 409 6224',
                email: 'cmcc549@aucklanduni.ac.nz',
                photoURL: require('../../Images/cole.jpg')
            }],
            "skills": [{
                description: "Strong understanding of Python and Java Programming Languages. Experience using HTML, CSS, and Javascript. Knowledge of SQL, C#, MIPS Assembly Language. Experience in functional programming using C#, F# and Javascript. Understanding of React Javascript Library."
            }],
            "work": [{
                company: 'Agriseeds',
                position: 'Apprentice',
                location: 'Hamilton, New Zealand',
                date: 'December 2016 - March 2017',
                employer: 'Kent Browning',
                businessSector: 'Agriculture / Grass Seed Manufacturing',
                summary: 'Included collecting numerous types of grass / clover seeds and mixing them to the required specifications of clients, correctly bagging these mixtures, and packing them onto shipping pallets. Worked with a small team of co-workers, and was required to teach new employees the general practices of the workplace, and how to operate the machinery.'
            }, {
                company: 'Rocketspark Ltd.',
                position: 'Work Experience',
                location: 'Cambridge, New Zealand',
                date: 'November 2016',
                employer: 'Jeremy Johnson, Rocketspark Ltd.',
                businessSector: 'Web Development',
                summary: 'This work experience opportunity included completing numerous tasks working along side a small team of web developers. Involved creating / editing HTML and CSS of webpages.'
            }, {
                company: 'NS and JL Farms Ltd.',
                position: 'Dairy Farm Assistant',
                location: 'Horsham Downs, Hamilton, New Zealand',
                date: 'Pre-February 2016',
                employer: 'Nick McConnell, Neil McConnell',
                businessSector: 'Dairy / Agriculture Industry',
                summary: "Included milking, operating numerous types of machinery, performing assigned tasks individually, and good communication with other staff members."
            }],
            "education": [{
                institution: 'The University of Auckland',
                qualification: [
                    'Bachelor of Science majoring in Information Systems and Computer Science'
                ],
                date: '2016 - February 2019'
            }, {
                institution: "Hamilton Boys' High School",
                qualification: [
                    'NCEA Level 3 (Endorsed with Merit)',
                    'NCEA Level 2 (Endorsed with Merit)',
                    'NCEA Level 1 (Endorsed with Merit)'
                ],
                date: '2013 - 2015'
            }]
        }

        const FooterData = {
            footerParagraph: "This website was designed and developed by Cole McConnell and Andy T H Baeck, utilising the React Javascript Library.",
            "andy": {
                email: 'hamento22@outlook.co.nz',
                linkedin: 'https://www.linkedin.com/in/taehyun-baeck-94257a121/',
                github: 'https://github.com/decidev22'
            },
            "cole": {
                email: 'cmcc549@aucklanduni.ac.nz',
                linkedin: 'https://www.linkedin.com/in/cole-mcconnell-b7972b151/',
                github: 'https://github.com/ColeInc'
            }
        }

        const ProjectData = {
            name: 'Web Portfolio',
            summary: 'This project was an idea that was thought up within our final semester of Computer Science at the University of Auckland. Our main reasoning for the project was to utilise the existing knowledge we had within HTML, CSS, and Javascript, and from there take this project a step further by implementing it using the React Javascript Framework.',
            author: 'Cole McConnell & Andy T H Baeck'
        }

        return (
            <StickyContainer>
                <Sticky>
                    {({ style }) => <div style={{ ...style }}><Header /></div>}
                </Sticky>
                <div className="Main">
                    <Route path="/" exact component={Home} />
                    <Route exact path="/andy" render={props => <Profile profileData={Andy} footerData={FooterData} />} />
                    <Route exact path="/cole" render={props => <Profile profileData={Cole} footerData={FooterData} />} />
                    <Route exact path="/project" render={props => <Project projectData={ProjectData} footerData={FooterData} />} />
                    {/* <Route path="/" render={() => <p>Test</p>} /> */}
                </div>
            </StickyContainer>
        );
    }
}

export default Main;