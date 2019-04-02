import React from 'react';
import './HomeContainer.css';

import Home from '../../../components/Home/Home';
import General from '../../../components/General/General';
import Footer from '../../../components/Footer/Footer';

const homeContainer = (props) => {
    const homeData = [
        "Hello, we are Andy and Cole.",
        "We are recent Computer Science graduates from the University of Auckland, who have decided to create a Web Portfolio using the React Javascript Library.",
        "The main idea behind this project was to utlise our existing knowledge of HTML, CSS and Javascript, and take this understanding as a foundation for creating an application implemented using React. Of course, what better way to create a React Application than making it an application about ourselves right?",
        "The idea was simple. Create an online application highlighting our skill sets, ambitions and an introduction about ourselves, and in the process of creating this, to learn a new Javascript Library. Initially we were eager to begin the project, jumping right in the deep end with minimal knowledge of how React worked, but hopeful that we would pick it up as we created the React App. Unfortunately this wasn't so much the case. We found that React was something that we had to have an overall understanding of how it all worked together and was laid out before we could begin creating something using it. This suggested we perhaps needed to go back to the basics. Hence, we started an online course on uDemy, which enabled us to understand the fundamental concepts of how React projects were supposed to be created, and this gave us the foundational knowledge we required to actually create a nicely written React app.",
        "After understanding the core concepts of React, how individual components are rendered, working with these components in Higher Order Components (HOC), dealing with props and states being passed to and from these components, as well as setting up Routing throughout the multi-page react application, we were able to create what we think was a respectable end product!",
        "Thank you for taking the time to take a peek at our project.",
        "Cheers, Andy and Cole.",
        '**break**'
    ];

    return (
        <div className="HomeContainer">
            <Home />
            <General generalData={homeData} heading="Introduction to our Web Portfolio" />
            <Footer footerData={props.footerData} />
        </div>
    );
}

export default homeContainer;