import React from 'react';

class Message extends React.Component {

    render() {
        return (
            <p className={'message ' + this.props.type} id={this.props.id}>
                {this.props.children}
            </p>
        );
    }
}

export default Message;
