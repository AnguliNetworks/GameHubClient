import React, {Component} from 'react';
import Cookies from 'universal-cookie';
import './css/main.css';

import Login from './components/views/login/View';
import LoadingScreen from "./components/views/LoadingScreen";

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {};

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
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        })
            .then(body => body.json())
            .then(json => {
                if (json.status === 'OK') {
                    if (this.cookies.get('session') && this.cookies.get('userId')) {
                        // TODO CHANGE URL
                        fetch('http://localhost:8080/session-check', {
                            method: 'POST',
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/x-www-form-urlencoded',
                            },
                            body: 'userId=' + this.cookies.get('userId') + '&session=' + this.cookies.get('session')
                        })
                            .then((body) => body.json())
                            .then((json) => {
                                this.setState({loggedIn: json.status === 'ACCEPTED'});
                                if (json.status !== 'ACCEPTED') {
                                    return;
                                }

                                this.setState({loading: true});

                                // TODO FURTHER UI LOADING
                            });
                    } else {
                        this.setState({loggedIn: false});
                    }
                } else {
                    this.setState({offline: true});
                }
            })
            .catch(() => {
                this.setState({offline: true});
            });
    }

    render() {
        if (this.state.loggedIn === undefined || this.state.loading) {
            return (
                <LoadingScreen offline={this.state.offline}/>
            );
        }
        let login = this.state.loggedIn ? <div/> : <Login afterLogin={this.loadUI}/>;

        return (
            <div>
                {login}
            </div>
        );
    }
}

export default App;
