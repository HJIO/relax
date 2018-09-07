import React from 'react';
import * as PropTypes from 'prop-types';
import UX from '../UXBuilder';
import classNames from 'classnames';

/**
 *
 *
 * @export
 * @class Icon
 * @extends {React.Component}
 */
export default class Icon extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {className: classNameProps, children, insertSpace, ...other} = this.props;
    return <i
      className={classNames('ux-icon fa fa-' + this.props.icon, classNameProps, UX.build(this))}>{insertSpace ? " " : ""}{children}</i>;
  }
}
Icon.defaultProps = {
  insertSpace: true
};
Icon.propTypes = {
  insertSpace: PropTypes.bool
};

