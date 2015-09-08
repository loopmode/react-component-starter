import React from 'react';
const style = {
    display: 'inline-block',
    border: '1px solid #999',
    padding: 10,
};

export default class Grandchild extends React.Component {
    static contextTypes = {
        data: React.PropTypes.shape({
            func: React.PropTypes.func.isRequired
        }).isRequired
    }
    state = {
        result: null
    }
    render() {
        return (
            <div style={style}>
                <h3>Grandchild</h3>
                <p>
                    This componented is interested in the 'func' function of the 'data' object:
                    <button onClick={this.handleClick}>click</button>
                    {this.state.result}
                </p>
            </div>
        );
    }
    handleClick = () => {
        const result = this.context.data.func('Woot!');
        this.setState({result});
    }
}
