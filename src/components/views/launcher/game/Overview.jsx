import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '../../../general/user/Avatar';
import Button from '../../../general/form/Button';

function GameOverview(props) {

    return (
        // TODO ADD EXPAND AND START FUNCTION
        <div className={'game'}>
            <Avatar src={props.icon} />
            <div className={'info'}>
                <span className={'name'}>{props.name}</span>
                <span className={'status'}>{props.status}</span>
            </div>
            <Button className={'start-button'} id={`play-${props.id}`} hiddenLabel>
                Starten
            </Button>
        </div>
    );

}

GameOverview.propTypes = {
    icon: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
};

export default GameOverview;
