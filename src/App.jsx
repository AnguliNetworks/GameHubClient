import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import './css/main.css';

import Request, { setShowLogin } from './utility/Request';

import Login from './components/views/login/View';
import LoadingScreen from './components/views/LoadingScreen';
import Launcher from './components/views/launcher/View';

class App extends Component {

    constructor(props) {

        super(props);

        this.state = {
            loading: true
        };

        this.cookies = new Cookies();

        this.loadUI = this.loadUI.bind(this);

        setShowLogin(() => this.setState({
            loading: false,
            loggedIn: false
        }));

    }

    componentDidMount() {

        this.loadUI();

    }

    loadUI() {

        new Request('status').get()
            .then(() =>
                new Request('authenticate').get()
                    .then(() =>
                        this.setState({
                            loading: false,
                            loggedIn: true
                        })))
            .catch(() => this.setState({ offline: true }));

    }

    render() {

        if (this.state.loading) {

            return (
                <LoadingScreen offline={this.state.offline} />
            );

        }

        return (
            <div>
                {
                    this.state.loggedIn ?
                        <Launcher loadUi={this.loadUI} /> :
                        <Login afterLogin={this.loadUI} />
                }
            </div>
        );

    }

}

export default App;
