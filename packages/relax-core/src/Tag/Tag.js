import React from 'react';
import UX from '../UXBuilder';
import classNames from 'classnames'
export default class Tag extends React.Component{
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <p className={classNames('ux-tag',this.props.className,UX.build(this))}>
        {this.props.children}
      </p>
    );
  }

}
