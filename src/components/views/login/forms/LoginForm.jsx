import React from 'react';
import Cookies from 'universal-cookie';
import PropTypes from 'prop-types';

import Request from '../../../../utility/Request';

import Panel from '../../../general/Panel';
import Message from '../../../general/Message';
import Form from '../../../general/form/Form';
import Input from '../../../general/form/Input';
import Button from '../../../general/form/Button';
import Link from '../../../general/Link';

class LoginForm extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            responseText: <Message />
        };

        this.formData = new Map();
        this.cookies = new Cookies();

        this.login = this.login.bind(this);
        this.setData = this.setData.bind(this);

    }

    setData(component, value) {

        this.formData.set(component.props.id, value);

    }

    login() {

        this.setState({ responseText: <Message /> });

        new Request('login', {
            mail: this.formData.get('login-mail'),
            password: this.formData.get('login-password')
        }).post()
            .then(json => this.props.login(json.token))
            .catch(json => this.setState({
                responseText: <Message type={'error'}>{json.error}</Message>
            }));

    }

    render() {

        return (
            <div className={'container'}>
                <Panel>
                    <h1 className={'title'}>
                        Login
                    </h1>
                    <Message type={'info'}>
                        Einmal anmelden und wir erinnern uns an Dich. Funktioniert nur in 99% der
                        Fällen also ab und zu werden wir uns hier wieder sehen :)
                    </Message>
                    {this.state.responseText}
                    <Form>
                        <Input
                            type={'text'}
                            id={'login-mail'}
                            onchange={this.setData}
                        >
                            Mail Adresse
                        </Input>
                        <Input
                            type={'password'}
                            id={'login-password'}
                            onchange={this.setData}
                        >
                            Passwort
                        </Input>
                        <Button
                            id={'login-button'}
                            type={'submit'}
                            onclick={this.login}
                        >
                            Anmelden
                        </Button>
                    </Form>
                </Panel>
                <Panel>
                    <Message type={'info'}>
                        Noch kein Konto?
                        <Link onclick={this.props.switch} color={'blue'}> Erstell Dir eins.</Link>
                    </Message>
                </Panel>
            </div>
        );

    }

}

LoginForm.propTypes = {
    switch: PropTypes.func.isRequired,
    login: PropTypes.func.isRequired
};

export default LoginForm;
