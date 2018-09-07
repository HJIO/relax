import React from 'react';
import classNames from 'classnames';
import UX from '../UXBuilder';

export default class Col extends React.Component {
  constructor (props) {
    super (props);
  }
  render () {
    const {className,children, ...other} = this.props;
    // const BreakpointTypes = ['lg', 'md', 'sm', 'xs'];
    // let layoutByProps = [];
    // BreakpointTypes.forEach (type => {
    //   this.props[type] && layoutByProps.push (type + '-' + this.props[type]);
    // });
    return (
      <div className={classNames ('ux-col', className, UX.build(this) )}>
        {children}
      </div>
    );
  }
}
