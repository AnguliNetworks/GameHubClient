import React from 'react';

import Panel from '../../../general/Panel';
import Message from '../../../general/Message';
import Form from '../../../general/form/Form';
import Input from '../../../general/form/Input';
import Button from '../../../general/form/Button';
import Link from '../../../general/Link';

class LoginForm extends React.Component {
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
                        <Input type={'text'} id={'login-user'}>Mail Adresse oder Benutzername</Input>
                        <Input type={'password'} id={'login-password'}>Passwort</Input>
                        <Button id={'login-button'} type={'submit'}>Anmelden</Button>
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
