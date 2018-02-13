import React from 'react';

class Column extends React.Component {

    render() {
        return (
            <div className={'column ' + this.props.size}>
                {this.props.children}
            </div>
        );
    }
}

export default Column;
