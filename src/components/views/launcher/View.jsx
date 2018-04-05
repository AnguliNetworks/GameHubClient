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

class Launcher extends React.Component {

    constructor(props) {

        super(props);

        this.cookies = new Cookies();

        this.state = {
            friends: [],
            games: []
        };

        this.logout = this.logout.bind(this);

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

    }

    logout() {

        this.cookies.remove('token');
        this.props.loadUi();

    }

    // TODO ADD API DATA
    render() {

        return (
            <div className={'launcher'}>
                <div className={'container'}>
                    <Column size={'small'}>
                        <Panel id={'profile'} transparent>
                            <UserInfo
                                avatar={'https://pbs.twimg.com/profile_images/932304084253671425/HuOBI7ix_400x400.jpg'}
                                username={'Fin'}
                                status={'Online'}
                            />
                            <ul className={'inline-menu'}>
                                <li className={'entry'}>
                                    <Link link={'#'} color={'grey'}>
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
                                                status={'zuletzt gespielt: heute'}
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
