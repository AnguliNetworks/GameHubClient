import React from 'react';

import Panel from '../../../general/Panel';
import Message from '../../../general/Message';
import Form from '../../../general/form/Form';
import Input from '../../../general/form/Input';
import Button from '../../../general/form/Button';
import Link from "../../../general/Link";

class RegistrationForm extends React.Component {
    render() {
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
                    <Message type={'error'} hidden={true} id={"registration-error"}/>
                    <Form>
                        <Input type={'text'} id={'registration-mail'}>Mail Adresse</Input>
                        <Input type={'text'} id={'registration-username'}>Benutzername</Input>
                        <Input type={'password'} id={'registration-password'}>Passwort</Input>
                        <Message type={'info'}>
                            Durch Deine Registrierung stimmst Du unseren
                            <Link link={'#'} color={'black'}> Nutzungsbedingungen</Link> und
                            <Link link={'#'} color={'black'}> Nutzungsbedingungen</Link> zu.
                        </Message>
                        <Button id={'registration-button'}>Registrieren</Button>
                    </Form>
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
