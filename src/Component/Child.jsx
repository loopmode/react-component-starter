import React from 'react';
import GrandChild from './GrandChild';
const style = {
    display: 'inline-block',
    border: '1px solid #666',
    padding: 10,
};

export default class Child extends React.Component {
    static contextTypes = {
        data: React.PropTypes.object.isRequired
    }
    render() {
        return (
            <div style={style}>
                <h3>Child</h3>
                <p>
                    This componented is interested in the 'data' object, whatever might be in there: {JSON.stringify(this.context.data)}
                </p>
                <GrandChild />
            </div>
        );
    }
}
