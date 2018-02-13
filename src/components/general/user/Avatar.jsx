import React from 'react';

class Avatar extends React.Component {

    render() {
        return (
            <div className={'avatar-container ' + (this.props.status ? this.props.status : '')}>
                <figure className={'avatar'} style={{backgroundImage: 'url(' + this.props.src + ')'}}/>
            </div>
        );
    }
}

export default Avatar;
