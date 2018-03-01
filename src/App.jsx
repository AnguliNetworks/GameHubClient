import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import './css/main.css';

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

    }

    componentDidMount() {

        this.loadUI();

    }

    loadUI() {

        fetch('http://localhost:8080/status', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
            .then(body => body.json())
            .then((statusJson) => {

                if (statusJson.status === 'OK') {

                    if (this.cookies.get('session') && this.cookies.get('userId')) {

                        // TODO CHANGE URL
                        fetch('http://localhost:8080/session-check', {
                            method: 'POST',
                            headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/x-www-form-urlencoded'
                            },
                            body: `userId=${this.cookies.get('userId')}&session=${this.cookies.get('session')}`
                        })
                            .then(body => body.json())
                            .then((sessionJson) => {

                                this.setState({ loggedIn: sessionJson.status === 'ACCEPTED' });
                                if (sessionJson.status !== 'ACCEPTED') {

                                    this.cookies.remove('session');
                                    this.cookies.remove('userId');

                                    this.setState({ loading: false });
                                    return;

                                }

                                this.setState({
                                    loading: false,
                                    loggedIn: true
                                });

                            });

                    } else {

                        this.setState({
                            loading: false,
                            loggedIn: false
                        });

                    }

                } else {

                    this.setState({
                        offline: true
                    });

                }

            })
            .catch(() => {

                this.setState({
                    offline: true
                });

            });

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
