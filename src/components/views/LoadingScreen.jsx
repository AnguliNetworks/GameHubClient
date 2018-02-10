import React from 'react';

class LoadingScreen extends React.Component {

    render() {
        if (this.props.offline) {
            return (
                <div className={'loading-screen offline'}>
                    <h1>Huch, hier stimmt was nicht :o</h1>
                    {
                        navigator.onLine ?
                            <span>
                                Unsere Server scheinen gerade Offline zu sein :/ Mehr Infos findest Du auf
                                <a href={'http://twitter.com/GameHubOne'} target={'_blank'}> Twitter</a> oder auf
                                <a href={'https://status.gamehub.one'} target={'_blank'}> unserer Status-Seite</a>.
                            </span> :
                            <span>
                                Du bist gerade nicht mit dem Internet verbunden. OfflinePlay wird leider
                                <i> noch</i> nicht unterstützt :/
                            </span>
                    }
                </div>
            );
        }

        return (
            <div className={'loading-screen loading'}>
                <div className={'spinner'}>
                    <div className={'bounce double-bounce1'}/>
                    <div className={'bounce double-bounce2'}/>
                </div>
                <h1>Gleich geht's los :-)</h1>
                <span>Du wirst angemeldet...</span>
            </div>
        );
    }
}

export default LoadingScreen;
