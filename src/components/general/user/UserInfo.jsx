import React from 'react';
import Avatar from "./Avatar";

class UserInfo extends React.Component {

    render() {
        let status = '';

        switch (this.props.status) {
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
                break;
        }

        return (
            // TODO ADD CLICK HANDLER
            <div className={'user'}>
                <Avatar status={status} src={this.props.avatar}/>
                <div className={'info'}>
                    <span className={'name'}>{this.props.username}</span>
                    <span className={'status'}>{this.props.status}</span>
                </div>
            </div>
        );
    }
}

export default UserInfo;
