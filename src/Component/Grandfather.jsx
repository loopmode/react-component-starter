import React from 'react';
import Father from './Father';
const style = {
    display: 'inline-block',
    border: '1px solid black',
    padding: 10,
};

export default class Grandfather extends React.Component {
	static childContextTypes = {
		foo: React.PropTypes.string,
		data: React.PropTypes.shape({
			msg: React.PropTypes.string,
			obj: React.PropTypes.object,
			func: React.PropTypes.func,
		})
	}
	getChildContext() {
		return {
			foo: 'foo',
			data: {
				msg: 'it works!',
				obj: {
					prop: 'value'
				},
				func: (arg: string) => {
					return `The function was called with the argument "${arg}"`;
				}
			}
		};
	}
	render(){
		return (
			<div style={style}>
				<h3>grandfather component</h3>
				<p>
					This component provides context to its nested children:
					<code>
						<pre>
							{JSON.stringify(this.getChildContext())}
						</pre>
					</code>
				</p>
				<Father />
			</div>
		);
	}
}
