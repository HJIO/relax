import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'
import View from "../View/View";
import UX from '../UXBuilder'
import CardView from "../CardView/CardView";

export default class PopOut extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,

    }
  }

  render() {
    const {title, content, ...others} = this.props;
    return (
      <View visiable={this.state.isVisible} className={classNames(UX.build(this))} {...others}>
        <CardView>
          <p><strong>{title}</strong></p>
          <p>{content}</p>
        </CardView>
      </View>
    );
  }
}
PopOut.PropTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
};