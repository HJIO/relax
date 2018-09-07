import * as React from 'react';
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
    const {className: classNameProps, menu,subtitle, navAppend, icon, title, children, ...other} = this.props;
    if (children) {
      return (
        <div className={classNames(classNameProps, 'ux-row', UX.build(this))}>
          {children}
        </div>
      );
    } else {
      return (
        <div className={'ux-nav'}>
          <Grid className={classNames(classNameProps, UX.build(this))}>
            <Row fixedHeightRule={4}>
              <Icon fontSizeRule={1.2} icon={icon} lg={4} md={4} sm={4} xs={8} textAlignRule={"left"}>{title} | {subtitle}</Icon>
              <Col fontSizeRule={1} lg={6} md={8} sm={8} xs={0}>{menu}</Col>
              <Col fontSizeRule={1} xsOnly={4} textAlignRule={"right"}><Icon icon={'bars'}/></Col>
              <Col fontSizeRule={2} lgOnly={2} textAlignRule={"right"}>
                {navAppend}
              </Col>
            </Row>
          </Grid>
        </div>
      );
    }

  }
}
