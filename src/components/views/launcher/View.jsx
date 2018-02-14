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
                                    src={'https://pbs.twimg.com/profile_images/961720742395219968/T80-pxAo_400x400.jpg'}
                                />
                                <Avatar
                                    status={'ingame'}
                                    src={'https://pbs.twimg.com/profile_images/963123405246562304/Ucf2P3mD_400x400.jpg'}
                                />
                                <Avatar
                                    status={'ingame'}
                                    src={'https://pbs.twimg.com/profile_images/584328543313723392/wFxDEHV3_400x400.jpg'}
                                />
                                <Avatar
                                    status={'online'}
                                    src={'https://pbs.twimg.com/profile_images/923193829666238464/wbdjH5OI_400x400.jpg'}
                                />
                                <Avatar
                                    status={'busy'}
                                    src={'https://pbs.twimg.com/profile_images/878973681489281025/tzjdE7f1_400x400.jpg'}
                                />
                                <Avatar
                                    status={'afk'}
                                    src={'https://pbs.twimg.com/profile_images/880108605659385857/w3elReLI_400x400.jpg'}
                                />
                                <Avatar
                                    src={'https://pbs.twimg.com/profile_images/949657515624714241/kOL2_Heq_400x400.jpg'}
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
                                    icon={'https://img.etsystatic.com/il/6b3848/1028207441/il_570xN.1028207441_og72.jpg'}
                                    name={'TBA'}
                                    status={'zuletzt gespielt: heute'}
                                />
                                <GameOverview
                                    icon={'https://img.etsystatic.com/il/6b3848/1028207441/il_570xN.1028207441_og72.jpg'}
                                    name={'TBA'}
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
