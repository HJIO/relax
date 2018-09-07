import React from 'react';
import UX from '../UXBuilder';
import classNames from 'classnames'
import {Col} from "../../index";

export default class CardView extends React.Component{
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Col className={classNames('frame-card-view',UX.build(this))}>
        {this.props.children}
      </Col>
    );
  }

}
