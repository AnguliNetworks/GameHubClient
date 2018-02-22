import React from 'react';
import PropTypes from 'prop-types';

import Panel from '../../../general/Panel';
import Message from '../../../general/Message';
import Form from '../../../general/form/Form';
import Input from '../../../general/form/Input';
import Button from '../../../general/form/Button';
import Link from '../../../general/Link';
import Modal from '../../../general/modal/Modal';

class RegistrationForm extends React.Component {

    constructor(props) {

        super(props);

        this.formData = new Map();

        this.state = {
            enableRegistrationButton: false
        };

        this.register = this.register.bind(this);
        this.setValidationFor = this.setValidationFor.bind(this);
        this.bindSitePolicyModal = this.bindSitePolicyModal.bind(this);
        this.bindPrivacyModal = this.bindPrivacyModal.bind(this);

    }

    setValidationFor(id, value, valid) {

        this.formData.set(id, {
            value,
            valid
        });

        let allValid = true;

        if (!valid || this.formData.size < 3) {

            allValid = false;

        } else {

            this.formData.forEach((formValue, key) => {

                if (key === id) {

                    return;

                }

                if (!formValue.valid) {

                    allValid = false;

                }

            });

        }

        this.setState({ enableRegistrationButton: allValid });

    }

    register() {

        this.setState({ enableRegistrationButton: false });

        // TODO CHANGE URL
        fetch('http://localhost:8080/register', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `mail=${encodeURIComponent(this.formData.get('registration-mail').value)}&username=${encodeURIComponent(this.formData.get('registration-mail'))}&password=${encodeURIComponent(this.formData.get('registration-password').value)}`
        })
            .then(body => body.json())
            .then((json) => {

                this.setState({
                    responseText:
                        (
                            <Message
                                type={json.status === 'CREATED' ? 'success' : 'error'}
                            >
                                {json.message}
                            </Message>
                        )
                });

            });

    }

    bindSitePolicyModal(modal) {

        this.setState({ sitePolicy: modal });

    }

    bindPrivacyModal(modal) {

        this.setState({ privacy: modal });

    }

    render() {

        // TODO CHANGE MODAL TEXT
        return (
            <div>
                <Modal title={'Nutzungsbedingungen'} bindModal={this.bindSitePolicyModal}>
                    <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
                        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
                        diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
                        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
                        diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
                        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                        amet.
                    </p>
                </Modal>
                <Modal title={'Datenschutz'} bindModal={this.bindPrivacyModal}>
                    <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
                        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
                        diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
                        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
                        diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
                        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                        amet.
                    </p>
                </Modal>
                <Panel>
                    <h1 className={'title'}>
                        Registrieren
                    </h1>
                    <Message type={'info'}>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                        eirmod tempor invidunt
                        ut labore et dolore magna aliquyam erat, sed diam voluptua.
                    </Message>
                    {this.state.responseText}
                    <Form>
                        <Input
                            type={'text'}
                            id={'registration-mail'}
                            validation={{
                                type: 'mail',
                                fn: this.setValidationFor
                            }}
                        >
                            Mail Adresse
                        </Input>
                        <Input
                            type={'text'}
                            id={'registration-username'}
                            validation={{
                                type: 'username',
                                fn: this.setValidationFor
                            }}
                        >
                            Benutzername
                        </Input>
                        <Input
                            type={'password'}
                            id={'registration-password'}
                            validation={{
                                type: 'password',
                                fn: this.setValidationFor
                            }}
                        >
                            Passwort
                        </Input>
                        <Message type={'info'}>
                            Durch Deine Registrierung stimmst Du unseren{' '}
                            <Link
                                modal={this.state.sitePolicy}
                                color={'black'}
                            >
                                Nutzungsbedingungen{' '}
                            </Link>
                            und{' '}
                            <Link
                                modal={this.state.privacy}
                                color={'black'}
                            >
                                Datenschutz{' '}
                            </Link>
                            zu.
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
                </Panel>
                <Panel>
                    <Message type={'info'}>
                        Du hast ein Konto?
                        <Link onclick={this.props.switch} color={'blue'}> Melde Dich an.</Link>
                    </Message>
                </Panel>
            </div>
        );

    }

}

RegistrationForm.propTypes = {
    switch: PropTypes.func.isRequired
};

export default RegistrationForm;
