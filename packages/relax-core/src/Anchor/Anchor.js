import React from 'react';
import UX from '../UXBuilder';
import Tag from '../Tag'
import classNames from 'classnames'
class Entity extends React.Component{
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Tag className={classNames('frame-anchor',`anchor-for-${this.props.for}`,UX.build(this))}>
        {this.props.children}
      </Tag>
    );
  }
}
export {Entity}

