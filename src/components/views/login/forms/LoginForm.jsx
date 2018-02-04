import React from 'react';

import Panel from '../../../general/Panel';
import Message from '../../../general/Message';
import Form from '../../../general/form/Form';
import Input from '../../../general/form/Input';
import Button from '../../../general/form/Button';
import Link from '../../../general/Link';

class LoginForm extends React.Component {

    constructor(props) {
        super(props);

        this.formData = new Map();

        this.login = this.login.bind(this);
        this.setData = this.setData.bind(this);
    }

    setData(component, value) {
        this.formData.set(component.props.id, value);
    }

    login() {
        // TODO CHANGE URL
        fetch('https://httpbin.org/post', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user: this.formData.get('login-user'),
                password: this.formData.get('login-password')
            })
        })
            .then((body) => body.json())
            // TODO ADD CALLBACK HANDLE
            .then((json) => console.log(json));
    }

    render() {
        return (
            <div>
                <Panel>
                    <h1 className={'title'}>
                        Login
                    </h1>
                    <Message type={'info'}>
                        Wenn Du Dich anmeldest, werden Deine Anmeldedaten lokal gespeichert, sodass Du Dich nicht erneut
                        anmelden musst.
                    </Message>
                    <Form>
                        <Input
                            type={'text'}
                            id={'login-user'}
                            onchange={this.setData}
                        >
                            Mail Adresse oder Benutzername
                        </Input>
                        <Input type={'password'} id={'login-password'} onchange={this.setData}>Passwort</Input>
                        <Button id={'login-button'} type={'submit'} onclick={this.login}>Anmelden</Button>
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

export default LoginForm;
