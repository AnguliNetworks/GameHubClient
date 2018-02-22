import React from 'react';

function Panel(props) {

    return (
        <div
            className={`panel${(props.transparent ? ' transparent' : '')}`}
            id={props.id}
        >
            {props.children}
        </div>
    );

}

export default Panel;
