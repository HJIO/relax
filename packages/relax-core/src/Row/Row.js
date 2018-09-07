import React from 'react';
import PropTypes from 'prop-types'
import classNames from 'classnames';
import UX from '../UXBuilder';

export default class Row extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        const {children,className:classNameProps, ...other} = this.props;
        return (
            <div className={classNames("ux-row",classNameProps,UX.build(this))}>
                {children}
            </div>
        );
    }

}
Row.defaultProps = {
    layoutRule:"flex",
    fontRule:"auto"
};
Row.propTypes = {
    precision: PropTypes.string,
    layoutRule: PropTypes.string,
    fontRule: PropTypes.string
};
