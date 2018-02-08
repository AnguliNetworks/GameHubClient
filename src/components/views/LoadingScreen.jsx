import React from 'react';

class LoadingScreen extends React.Component {
    render() {
        return (
            <div className={'loading'}>
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
