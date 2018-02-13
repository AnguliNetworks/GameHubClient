import React from 'react';
import Column from "../../general/Column";
import Panel from "../../general/Panel";
import UserInfo from "../../general/user/UserInfo";
import Link from "../../general/Link";
import Avatar from "../../general/user/Avatar";
import GameOverview from "./game/Overview";

class Launcher extends React.Component {

    render() {
        // TODO ADD API DATA
        return (
            <div className={'launcher'}>
                <div className={'container'}>
                    <Column size={'small'}>
                        <Panel id={'profile'} transparent>
                            <UserInfo
                                avatar={'https://picsum.photos/64/64/'}
                                username={'Gronkh'}
                                status={'Online'}
                            />
                            <ul className={'inline-menu'}>
                                <li className={'entry'}>
                                    <Link link={'#'} color={'grey'}>
                                        Einstellungen
                                    </Link>
                                </li>
                                <li className={'entry'}>
                                    <Link link={'#'} color={'grey'}>
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
                                <Avatar
                                    status={'ingame'}
                                    src={'https://picsum.photos/64/64/'}
                                />
                                <Avatar
                                    status={'ingame'}
                                    src={'https://picsum.photos/64/64/'}
                                />
                                <Avatar
                                    status={'ingame'}
                                    src={'https://picsum.photos/64/64/'}
                                />
                                <Avatar
                                    status={'online'}
                                    src={'https://picsum.photos/64/64/'}
                                />
                                <Avatar
                                    status={'busy'}
                                    src={'https://picsum.photos/64/64/'}
                                />
                                <Avatar
                                    status={'afk'}
                                    src={'https://picsum.photos/64/64/'}
                                />
                                <Avatar
                                    src={'https://picsum.photos/64/64/'}
                                />
                                <Avatar
                                    src={'https://picsum.photos/64/64/'}
                                />
                                <Avatar
                                    src={'https://picsum.photos/64/64/'}
                                />
                            </div>
                        </Panel>
                    </Column>
                    <Column size={'large'}>
                        <Panel id={'games'}>
                            <h1 className={'title'}>
                                Spiele
                            </h1>
                            <div className={'game-list'}>
                                <GameOverview
                                    icon={'https://picsum.photos/64/64/'}
                                    name={'Counter-Strike: Global Offensive'}
                                    status={'zuletzt gespielt: heute'}
                                />
                                <GameOverview
                                    icon={'https://picsum.photos/64/64/'}
                                    name={'Counter-Strike: Global Offensive'}
                                    status={'zuletzt gespielt: heute'}
                                />
                            </div>
                        </Panel>
                    </Column>
                </div>
            </div>
        );
    }

}

export default Launcher;
