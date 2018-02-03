import React from 'react';

class Panel extends React.Component {

    render() {
        return (
            <div className={'panel'} id={this.props.id}>
                {this.props.children}
            </div>
        );
    }
}

export default Panel;
