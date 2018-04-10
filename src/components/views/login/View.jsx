import React from 'react';
import PropTypes from 'prop-types';

import RegistrationForm from './forms/RegistrationForm';
import LoginForm from './forms/LoginForm';

class Login extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            currentForm: 'login'
        };

        this.switchForm = this.switchForm.bind(this);
        this.login = this.login.bind(this);

    }

    login(token) {

        localStorage.setItem('token', token);
        this.props.afterLogin();

    }

    switchForm() {

        if (this.state.currentForm === 'registration') {

            this.setState({ currentForm: 'login' });

        } else {

            this.setState({ currentForm: 'registration' });

        }

    }

    render() {

        let login = '';

        if (!this.state.loggedIn) {

            login = (
                <div className={'login container'}>
                    {
                        this.state.currentForm === 'registration' ?
                            <RegistrationForm switch={this.switchForm} /> :
                            <LoginForm switch={this.switchForm} login={this.login} />
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

Login.propTypes = {
    afterLogin: PropTypes.func.isRequired
};

export default Login;
