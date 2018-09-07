import React from 'react';
import UX from '../UXBuilder';
import classNames from 'classnames'
import PropTypes from 'prop-types'
import {Col} from "../../index";
import Tag from "../Tag/Tag";

class Entity extends React.Component{
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Col className={classNames('frame-view',UX.build(this))}>
        {this.props.children}
      </Col>
    );
  }

}
function ViewHeader(props){
  return <Tag className={`frame-view-header h${props.headerLevelRule}`}>{props.children}</Tag>
}
function ViewBody(props){
  const {children, ...rest} = props;
  const Wrapper = {props:props};
  return <div className={classNames(['frame-view-body'],UX.build(Wrapper))} {...rest}>{children}</div>
}
function ViewFooter(props){
  const {children, ...rest} = props;
  return <div className={'frame-view-footer'} {...rest}>{children}</div>
}
Entity.defaultProps = {
  active:true,
};
ViewBody.defaultProps = {
  active:false,
};
ViewHeader.defaultProps = {
  headerLevelRule:2,
};
export {Entity, ViewHeader, ViewBody, ViewFooter}