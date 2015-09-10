import css from './Button.scss';
import cx from 'classnames';
import React, {Component} from 'react';
export default class Button extends Component {
    static propTypes = {
        disabled: React.PropTypes.bool
    }
    static defaultProps = {
        disabled: false
    }
    render() {
        const {
            className,
            ...props
        } = this.props;
        return (
            <button
                {...props}
                className={cx(css.Button, 'Button', className)}
            >{this.props.text || this.props.children}</button>
        );
    }
}
