import React from 'react';

class Link extends React.Component {
    render() {
        return (
            <a href={this.props.link} onClick={this.props.onclick} className={this.props.color}>
                {this.props.children}
            </a>
        );
    }
}

export default Link;
