import React, {Component} from 'react';
import {CookiesProvider} from 'react-cookie';
import './css/main.css';

import Login from './components/views/login/View';

class App extends Component {
    render() {
        return (
            <CookiesProvider>
                <div className="App">
                    <Login/>
                </div>
            </CookiesProvider>
        );
    }
}

export default App;
