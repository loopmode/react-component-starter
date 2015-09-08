import React from 'react';
import Child from './Child';
const style = {
    display: 'inline-block',
    border: '1px solid #333',
    padding: 10,
};

export default class Father extends React.Component {
    static contextTypes = {
        foo: React.PropTypes.string.isRequired
    }
    render() {
        return (
            <div style={style}>
                <h3>Father</h3>
                <p>
                    This componented is interested in the 'foo' context value, which is: {this.context.foo}
                </p>
                <Child />
            </div>
        );
    }
}
