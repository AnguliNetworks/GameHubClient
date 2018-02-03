import React from 'react';

import Panel from '../../../general/Panel';
import Message from '../../../general/Message';
import Form from '../../../general/form/Form';
import Input from '../../../general/form/Input';
import Button from '../../../general/form/Button';
import Link from '../../../general/Link';

class RegistrationForm extends React.Component {

    constructor(props) {
        super(props);

        this.formData = new Map();

        this.state = {
            enableRegistrationButton: false
        };

        this.register = this.register.bind(this);
        this.setValidationFor = this.setValidationFor.bind(this);
    }

    setValidationFor(component, value) {
        this.formData.set(component.props.id, {
            value: component.state.value,
            valid: value
        });

        let valid = true;

        if (!value) {
            valid = false;
        }

        if (this.formData.size < 3) {
            valid = false;
        }

        if (valid) {
            this.formData.forEach((value, key) => {
                if (key === component.props.id) {
                    return;
                }

                if (!value.valid) {
                    valid = false;
                }
            });
        }

        this.setState({enableRegistrationButton: valid});
    }

    register() {
        // TODO CHANGE URL
        fetch('https://httpbin.org/status/404', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                mail: this.formData.get('registration-mail').value,
                username: this.formData.get('registration-username').value,
                password: this.formData.get('registration-password').value
            })
        })
            .then((body) => body.json())
            .then((json) => console.log(json));
    }

    render() {

        this.form = (
            <Form>
                <Input
                    type={'text'}
                    id={'registration-mail'}
                    validation={{type: 'mail', fn: this.setValidationFor}}
                >
                    Mail Adresse
                </Input>
                <Input
                    type={'text'}
                    id={'registration-username'}
                    validation={{type: 'username', fn: this.setValidationFor}}
                >
                    Benutzername
                </Input>
                <Input
                    type={'password'}
                    id={'registration-password'}
                    validation={{type: 'password', fn: this.setValidationFor}}
                >
                    Passwort
                </Input>
                <Message type={'info'}>
                    Durch Deine Registrierung stimmst Du unseren
                    <Link link={'#'} color={'black'}> Nutzungsbedingungen</Link> und
                    <Link link={'#'} color={'black'}> Nutzungsbedingungen</Link> zu.
                </Message>
                <Button
                    id={'registration-button'}
                    disabled={!this.state.enableRegistrationButton}
                    onclick={this.register}
                    type={'submit'}
                >
                    Registrieren
                </Button>
            </Form>
        );

        return (
            <div>
                <Panel>
                    <h1 className={'title'}>
                        Registrieren
                    </h1>
                    <Message type={'info'}>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                        ut labore et dolore magna aliquyam erat, sed diam voluptua.
                    </Message>
                    {this.form}
                </Panel>
                <Panel>
                    <Message type={'info'}>
                        Du hast ein Konto?
                        <Link link={'#'} onclick={this.props.switch} color={'blue'}> Melde Dich an.</Link>
                    </Message>
                </Panel>
            </div>
        );
    }
}

export default RegistrationForm;
