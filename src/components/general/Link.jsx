import React from 'react';

class Link extends React.Component {

    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        if (this.props.link === undefined) {
            event.preventDefault();
        }

        if (this.props.modal) {
            this.props.modal.showModal();
        }

        if (this.props.onclick) {
            this.props.onclick(event);
        }
    }

    render() {
        return (
            <a href={this.props.link ? this.props.link : "/"} onClick={this.handleClick}
               className={this.props.color + (this.props.className ? ' ' + this.props.className : '')}>
                {this.props.children}
            </a>
        );
    }
}

export default Link;
