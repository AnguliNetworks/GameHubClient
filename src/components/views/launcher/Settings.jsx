import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../../general/modal/Modal';
import Form from '../../general/form/Form';
import Input from '../../general/form/Input';
import Request from '../../../utility/Request';
import Message from '../../general/Message';

class UserSettings extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            responseText: <Message />
        };

        this.uploadAvatar = this.uploadAvatar.bind(this);

    }

    uploadAvatar(input, value) {

        console.log(value);

        switch (value.type) {

            case 'image/jpeg':
            case 'image/png':
                break;
            default:
                this.setState({
                    responseText: (
                        <Message type={'error'}>
                            Dein Avatar darf nur eine .png, .jpg oder .jpeg Datei sein.
                        </Message>
                    )
                });
                return;

        }

        this.setState({
            responseText: (
                <Message>
                    Dein Avatar wird geändert...
                </Message>
            )
        });

        const reader = new FileReader();

        reader.onload = () => {

            new Request('user/avatar', {
                avatar: reader.result
            }).post()
                .then((json) => {

                    this.setState({
                        responseText: <Message type={'success'}>{json.message}</Message>
                    });
                    this.props.loadUser();

                });

        };

        reader.readAsDataURL(value);


    }

    render() {

        return (
            <Modal bindModal={this.props.bindModal} title={'Einstellungen'}>
                <div>
                    <Message type={'info'}>
                        Hier kannst Du Dein Account verwalten.
                    </Message>
                    {this.state.responseText}
                    <Form>
                        <Input id={'settings-avatar'} type={'file'} onchange={this.uploadAvatar}>
                            Avatar
                        </Input>
                    </Form>
                </div>
            </Modal>
        );

    }

}

UserSettings.propTypes = {
    loadUser: PropTypes.func.isRequired,
    bindModal: PropTypes.func.isRequired
};

export default UserSettings;
