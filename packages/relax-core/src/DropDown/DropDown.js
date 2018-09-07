import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from "../Icon/Icon";
/**
 *
 *
 * @export
 * @class DropDown
 * @extends {React.Component}
 */
export default class DropDown extends React.Component {
    constructor (props) {
        super (props);
    }
    render () {
        const {className: classNameProps,icon,title, ...other} = this.props;
        return (
            <div className={classNames (classNameProps,'ux-row')} {...other}>
                <Icon icon={icon} xs={1}/>
                <Col xs={2}>{title}</Col>

            </div>
        );
    }
}
