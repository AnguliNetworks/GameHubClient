import React from 'react';
import PropTypes from 'prop-types';
import Link from '../general/Link';

function LoadingScreen(props) {

    if (props.offline) {

        return (
            <div className={'loading-screen offline'}>
                <h1>Huch, hier stimmt was nicht :o</h1>
                {
                    navigator.onLine ?
                        <span>
                                Unsere Server scheinen gerade Offline zu sein :/ Mehr Infos findest
                                Du auf{' '}
                            <Link link={'http://twitter.com/GameHubOne'} extern>
                                Twitter
                            </Link>
                            {' '}oder auf{' '}
                            <Link link={'https://status.gamehub.one'} extern>
                                unserer Status-Seite
                            </Link>.
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
                <div className={'bounce double-bounce1'} />
                <div className={'bounce double-bounce2'} />
            </div>
            <h1>Gleich geht&apos;s los :-)</h1>
            <span>Du wirst angemeldet...</span>
        </div>
    );

}

LoadingScreen.propTypes = {
    offline: PropTypes.bool
};

LoadingScreen.defaultProps = {
    offline: false
};

export default LoadingScreen;
