import React from 'react';
import Avatar from "../../../general/user/Avatar";
import Button from "../../../general/form/Button";

class GameOverview extends React.Component {

    render() {
        return (
            <div className={'game'}>
                <Avatar src={this.props.icon}/>
                <div className={'info'}>
                    <span className={'name'}>{this.props.name}</span>
                    <span className={'status'}>{this.props.status}</span>
                </div>
                <Button className={'start-button'} id={'play-' + this.props.id} hidden>
                    Starten
                </Button>
            </div>
        );
    }
}

export default GameOverview;
