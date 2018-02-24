import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import css from './MyComponent.css';

/**
 * This is MyComponent
 * @reactProps {string} className - Optional CSS class
 */
export default class MyComponent extends React.Component {
    static propTypes = {
        className: PropTypes.string
    };
    render() {
        return (
            <div className={cx(this.props.className, css.MyComponent, 'MyComponent')}>
                <h3>My Component</h3>
                <p>Go nuts!</p>
            </div>
        );
    }
}
