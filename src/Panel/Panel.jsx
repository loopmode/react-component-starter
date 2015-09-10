import css from './Panel.scss';
import cx from 'classnames';
import React from 'react';

export default class Panel extends React.Component {
    static propTypes = {
        title: React.PropTypes.string
    }
    static defaultProps = {
        title: null
    }
    render() {
        const {title, children} = this.props;
        const header = title ? <header>{title}</header> : null;
        const body = children ? <section>{children}</section> : null;
        const noHeader = !header;
        const noContent = !body;
        return (
            <div className={cx(css.Panel, {noHeader}, {noContent})}>
                {header}
                {body}
            </div>
        );
    }
}
