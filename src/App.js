import React, { Component } from 'react';
// import { BrowserRouter } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';

import Main from './containers/Main/Main';

class App extends Component {

    render() {
        return (
            // <BrowserRouter>
            <HashRouter>
                <div className="App">
                    <Main />
                </div>
            {/* </BrowserRouter> */}
            </HashRouter>
        )
    }
}

export default App;