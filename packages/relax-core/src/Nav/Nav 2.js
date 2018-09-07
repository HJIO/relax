import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import UX from '../UXBuilder';
import Icon from "../Icon";
import Col from "../Col";
import Grid from "../Grid"
import Row from "../Row"

/**
 *
 *
 * @export
 * @class Nav
 * @extends {React.Component}
 */
export default class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {className: classNameProps, menu, navAppend, icon, title, children, ...other} = this.props;
    if (children) {
      return (
        <div className={classNames(classNameProps, 'ux-row', UX.build(this))}>
          {children}
        </div>
      );
    } else {
      return (
        <div className={classNames(classNameProps, 'ux-nav', UX.build(this.props))}>
          <Grid>
            <Row fixedHeightRule={4}>
              <Icon fontSizeRule={'2'} icon={icon} md={3} sm={3} xs={8} textAlignRule={"left"}>{title}</Icon>
              <Col fontSizeRule={'1'} md={6} sm={9} xs={0} textAlignRule={"center"}>{menu}</Col>
              <Col fontSizeRule={'1'} xsOnly={4} textAlignRule={"right"}><Icon icon={'bars'}/></Col>
              <Col fontSizeRule={'2'} lgOnly={3} textAlignRule={"right"}>
                {navAppend}
              </Col>
            </Row>
          </Grid>
        </div>
      );
    }

  }
}
