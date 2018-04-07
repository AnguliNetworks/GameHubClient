import React from 'react';
import PropTypes from 'prop-types';
import Message from '../../../general/Message';
import Modal from '../../../general/modal/Modal';
import Input from '../../../general/form/Input';
import Form from '../../../general/form/Form';
import Button from '../../../general/form/Button';
import Request from '../../../../utility/Request';

class AddFriend extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            input: '',
            responseText: <Message />
        };

        this.addFriend = this.addFriend.bind(this);
        this.setData = this.setData.bind(this);

    }

    setData(component, value) {

        this.setState({
            input: value
        });

    }

    addFriend() {

        if (this.state.input.length < 3) {

            this.setState({
                responseText: (
                    <Message type={'error'}>
                        Du musst aber auch einen Namen angeben, bevor wir suchen können.
                    </Message>
                )
            });
            return;

        }

        new Request('friendship/add', {
            username: this.state.input
        }).post()
            .then((json) => {

                this.setState({
                    responseText: (
                        <Message type={'success'}>
                            {json.message}
                        </Message>
                    )
                });

            })
            .catch((json) => {

                this.setState({
                    responseText: (
                        <Message type={'error'}>
                            {json.error}
                        </Message>
                    )
                });

            });

    }

    render() {

        return (
            <Modal bindModal={this.props.bindModal} title={'Füge einen Freund hinzu'}>
                <div>
                    <Message type={'info'}>
                        Gib den Namen Deines Freundes ein und wir schauen mal, ob wir jemanden
                        finden.
                    </Message>
                    {this.state.responseText}
                    <Form>
                        <Input id={'add-friend'} type={'text'} onchange={this.setData}>
                            Name des Freundes
                        </Input>
                        <Button id={'add-friend-submit'} type={'submit'} onclick={this.addFriend}>
                            Freund hinzufügen
                        </Button>
                    </Form>
                </div>
            </Modal>
        );

    }

}

AddFriend.propTypes = {
    bindModal: PropTypes.func.isRequired
};

export default AddFriend;
