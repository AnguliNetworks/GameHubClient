import React from 'react';
import {Cookies, withCookies} from 'react-cookie';
import {instanceOf} from 'prop-types';
import RegistrationForm from "./forms/RegistrationForm";
import LoginForm from "./forms/LoginForm";

class Login extends React.Component {
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };

    constructor(props) {
        super(props);

        this.state = {
            currentForm: 'registration'
        };

        this.switchForm = this.switchForm.bind(this);
    }

    componentWillMount() {
        const {cookies} = this.props;

        this.setState({
            loggedIn: cookies.get('SESSION')
        });
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
                            <LoginForm switch={this.switchForm}/>
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

export default withCookies(Login);
