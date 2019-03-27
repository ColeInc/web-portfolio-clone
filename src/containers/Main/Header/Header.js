import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import './Header.css';

class Header extends Component {
    state = {
        isClicked: false,
        buttonClass: 'Header',
        menuIconClicked: 'menuIcon'
    }

    buttonPress = () => {
        let clk = this.state.isClicked;
        if (clk === false) {
            this.setState({ isClicked: !clk, buttonClass: 'HeaderMobile', menuIconClicked: 'menuIconClicked' });
        } else {
            this.setState({ isClicked: !clk, buttonClass: 'Header', menuIconClicked: 'menuIcon' });
        }
    }

    render() {
        return (
            <header className={this.state.buttonClass}>
                <button className={this.state.menuIconClicked} onClick={this.buttonPress}><div><FontAwesomeIcon icon={faBars} /></div></button>
                <ul id="navBar">
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
            </header>
        );
    }
}

export default Header;