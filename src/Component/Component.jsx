import React from 'react';

const style = {
    display: 'inline-block',
    border: '1px solid black',
    padding: 10,
    fontWeight: 'bold'
};

export default class Component extends React.Component {
    render() {
        return (
            <div style={style}>
                I am a simple react component
            </div>
        );
    }
}
