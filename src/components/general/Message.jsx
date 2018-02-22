import React from 'react';

function Message(props) {

    return (
        <p className={`message ${props.type}`} id={props.id}>
            {props.children}
        </p>
    );

}

export default Message;
