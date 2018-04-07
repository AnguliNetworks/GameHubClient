import React from 'react';
import PropTypes from 'prop-types';
import Cookies from 'universal-cookie';
import Column from '../../general/Column';
import Panel from '../../general/Panel';
import UserInfo from '../../general/user/UserInfo';
import Link from '../../general/Link';
import Avatar from '../../general/user/Avatar';
import GameOverview from './game/Overview';

import Request from '../../../utility/Request';
import UserSettings from './Settings';

class Launcher extends React.Component {

    constructor(props) {

        super(props);

        this.cookies = new Cookies();

        this.state = {
            user: {},
            friends: [],
            games: []
        };

        this.logout = this.logout.bind(this);
        this.bindSettingsModal = this.bindSettingsModal.bind(this);
        this.loadUser = this.loadUser.bind(this);

        new Request('game/page/1').get()
            .then(json =>
                this.setState({
                    games: json
                }));

        new Request('friendship/list').get()
            .then(json =>
                this.setState({
                    friends: json
                }));

        this.loadUser();

    }

    loadUser() {

        new Request('user/info/me').get()
            .then(json =>
                this.setState({
                    user: json
                }));

    }

    logout() {

        this.cookies.remove('token');
        this.props.loadUi();

    }

    bindSettingsModal(modal) {

        this.setState({ settings: modal });

    }

    render() {

        return (
            <div className={'launcher'}>

                <UserSettings bindModal={this.bindSettingsModal} loadUser={this.loadUser} />

                <div className={'container'}>
                    <Column size={'small'}>
                        <Panel id={'profile'} transparent>
                            <UserInfo
                                avatar={this.state.user.avatar ? this.state.user.avatar : ''}
                                username={this.state.user.username ? this.state.user.username : ''}
                                status={'Online'}
                            />
                            <ul className={'inline-menu'}>
                                <li className={'entry'}>
                                    <Link modal={this.state.settings} color={'grey'}>
                                        Einstellungen
                                    </Link>
                                </li>
                                <li className={'entry'}>
                                    <Link onclick={this.logout} color={'grey'}>
                                        Abmelden
                                    </Link>
                                </li>
                            </ul>
                        </Panel>
                        <Panel id={'friends'}>
                            <h1 className={'title'}>
                                Freunde
                            </h1>
                            <div className={'friend-list'}>
                                {
                                    this.state.friends.map(friend =>
                                        <Avatar key={friend.name} src={friend.avatar} />)
                                }
                            </div>
                        </Panel>
                    </Column>
                    <Column size={'large'}>
                        <Panel id={'games'}>
                            <h1 className={'title'}>
                                Spiele
                            </h1>
                            <div className={'game-list'}>
                                {
                                    this.state.games.map(item =>
                                        (
                                            <GameOverview
                                                key={item.id}
                                                id={item.id}
                                                icon={item.icon}
                                                name={item.name}
                                                status={item.author}
                                            />
                                        ))
                                }
                            </div>
                        </Panel>
                    </Column>
                </div>
            </div>
        );

    }

}

Launcher.propTypes = {
    loadUi: PropTypes.func.isRequired
};

export default Launcher;
