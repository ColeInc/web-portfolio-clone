import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
// import { HashRouter } from 'react-router-dom';

import Main from './containers/Main/Main';

class App extends Component {

    render() {
        return (
            <BrowserRouter basename={process.env.PUBLIC_URL}>
            {/* // <HashRouter basename={process.env.PUBLIC_URL}> */}
            {/* // <HashRouter basename={process.env.PUBLIC_URL + '/'}> */}
            {/* <HashRouter basename="/"> */}
                <div className="App">
                    <Main />
                </div>
            {/* </BrowserRouter> */}
            {/* </HashRouter> */}
            </BrowserRouter>
        )
    }
}

export default App;