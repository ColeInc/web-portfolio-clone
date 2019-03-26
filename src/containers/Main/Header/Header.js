import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

// const project = (props) => {
const header1 = () => {
    // return (
    //     <header className="Header">
    //             <ul>
    //                 <Link to="/"><li>Home</li></Link>
    //                 <Link to={{
    //                     pathname: '/andy',
    //                     hash: '', //this is for any hashtag to implement on the end of the URL, E.g. #submit that you sometimes see, etc. I think this is basically jumping to a certain place on a page, E.g. jump to section 4 half way down the page named #section4
    //                     search: '' //similar to above, this is for any search query parameters, E.g. quick-submit=true that may be helpful in a search function.
    //                 }}><li>Andy</li>
    //                 </Link>
    //                 <Link to={{ pathname: '/cole' }}>
    //                     <li>Cole</li>
    //                 </Link>
    //                 <Link to={{ pathname: '/project' }}>
    //                     <li>Project</li>
    //                 </Link>
    //             </ul>
    //             </header>
    // );
    return (
        <header className="Header">
            <nav>
                <ul>
                    <Link to="/"><li>Home</li></Link>
                    <Link to={{
                        pathname: '/andy',
                        hash: '', //this is for any hashtag to implement on the end of the URL, E.g. #submit that you sometimes see, etc. I think this is basically jumping to a certain place on a page, E.g. jump to section 4 half way down the page named #section4
                        search: '' //similar to above, this is for any search query parameters, E.g. quick-submit=true that may be helpful in a search function.
                    }}><li>Andy</li>
                    </Link>
                    <Link to={{ pathname: '/cole' }}>
                        <li>Cole</li>
                    </Link>
                    <Link to={{ pathname: '/project' }}>
                        <li>Project</li>
                    </Link>
                </ul>
            </nav>
        </header>
    );
}

export default header1;