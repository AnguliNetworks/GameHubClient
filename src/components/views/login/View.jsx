import React from 'react';
import Cookies from 'universal-cookie';

import RegistrationForm from "./forms/RegistrationForm";
import LoginForm from "./forms/LoginForm";

class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            currentForm: 'registration'
        };

        this.cookies = new Cookies();

        this.switchForm = this.switchForm.bind(this);
        this.login = this.login.bind(this);
    }

    login(user) {
        console.log(user);
        this.cookies.set('session', user.session, {path: '/'});
        this.cookies.set('userId', user.id, {path: '/'});
        this.props.afterLogin();
    }

    switchForm() {
        if (this.state.currentForm === 'registration') {
            this.setState({currentForm: 'login'});
        } else {
            this.setState({currentForm: 'registration'});
        }
    }

    render() {
        let login = '';

        if (!this.state.loggedIn) {
            login = (
                <div className={'login'}>
                    {
                        this.state.currentForm === "registration" ?
                            <RegistrationForm switch={this.switchForm}/> :
                            <LoginForm switch={this.switchForm} login={this.login}/>
                    }
                </div>
            );
        }
        return (
            <div>
                {login}
            </div>
        );
    }
}

export default Login;
