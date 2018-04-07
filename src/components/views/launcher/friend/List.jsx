import React from 'react';
import Avatar from '../../../general/user/Avatar';
import Panel from '../../../general/Panel';
import Request from '../../../../utility/Request';
import Message from '../../../general/Message';
import AddFriend from './Add';
import Modal from '../../../general/modal/Modal';
import Form from '../../../general/form/Form';
import Button from '../../../general/form/Button';

class FriendList extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            friends: [],
            openFriends: []
        };

        this.bindAddFriendModal = this.bindAddFriendModal.bind(this);
        this.loadFriends = this.loadFriends.bind(this);

        this.loadFriends();

    }

    loadFriends() {

        new Request('friendship/list').get()
            .then(json =>
                this.setState({
                    friends: json
                }));

        new Request('friendship/requests').get()
            .then(json =>
                this.setState({
                    openFriends: json
                }));

    }

    bindAddFriendModal(modal) {

        this.setState({ addFriend: modal });

    }

    render() {

        let openRequests = '';

        if (this.state.openFriends.length !== 0) {

            openRequests = (
                <div>
                    <hr />
                    <Modal
                        bindModal={modal => this.setState({ requestModal: modal })}
                        title={'Freundschaftsanfrage bestätigen'}
                    >
                        <div>
                            <Message type={'info'}>
                                Möchtest Du die Freundschaftsanfrage
                                von {this.state.currentRequest} annehmen?
                            </Message>
                            <Form>
                                <Button
                                    id={'cancel-friend'}
                                    type={'button'}
                                    className={'cancel'}
                                    onclick={() => {

                                        new Request('friendship/decline', {
                                            username: this.state.currentRequest
                                        }).post()
                                            .then(() => this.loadFriends());

                                    }}
                                >
                                    Ablehnen
                                </Button>
                                <Button
                                    id={'accept-friend'}
                                    type={'submit'}
                                    onclick={() => {

                                        new Request('friendship/accept', {
                                            username: this.state.currentRequest
                                        }).post()
                                            .then(() => this.loadFriends());

                                    }}
                                >
                                    Annehmen
                                </Button>
                            </Form>
                        </div>
                    </Modal>
                    <Message type={'info'}>Offene Freundschaftsanfragen:</Message>
                    {
                        this.state.openFriends.map(request => (
                            <Avatar
                                key={`request-${request.username}`}
                                src={request.avatar}
                                onclick={() => {

                                    this.setState({ currentRequest: request.username });
                                    this.state.requestModal.showModal();

                                }}
                            />
                        ))
                    }
                </div>
            );

        }

        return (
            <div>
                <AddFriend bindModal={this.bindAddFriendModal} />
                <Panel id={'friends'}>
                    <h1 className={'title'}>
                        Freunde
                    </h1>
                    <div className={'friend-list'}>
                        {
                            this.state.friends.map(friend =>
                                <Avatar key={friend.name}
                                        src={friend.avatar} />)
                        }
                        <Avatar
                            src={'https://i.imgur.com/5ay16wZ.png'}
                            modal={this.state.addFriend}
                        />
                        {openRequests}
                    </div>
                </Panel>
            </div>
        );

    }

}

export default FriendList;
