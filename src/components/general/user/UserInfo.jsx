import React from 'react';
import PropTypes from 'prop-types';
import Avatar from './Avatar';

function UserInfo(props) {

    let status = '';

    switch (props.status) {

        case 'Im Spiel':
            status = 'ingame';
            break;
        case 'Online':
            status = 'online';
            break;
        case 'Beschäftigt':
            status = 'busy';
            break;
        case 'AFK':
            status = 'afk';
            break;
        default:

    }

    return (
        // TODO ADD CLICK HANDLER (PROFILE ETC)
        <div className={'user'}>
            <Avatar status={status} src={props.avatar} />
            <div className={'info'}>
                <span className={'name'}>{props.username}</span>
                <span className={'status'}>{props.status}</span>
            </div>
        </div>
    );

}

UserInfo.propTypes = {
    // TODO ADD DEFAULT AVATAR
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired
};

export default UserInfo;
