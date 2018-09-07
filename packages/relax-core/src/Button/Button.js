import React, {Component} from 'react';
import UX from '../UXBuilder';
import classNames from 'classnames'
import * as PropTypes from 'prop-types'
import Icon from '../Icon'

export default class Button extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.setState({
      disabled:true,
      delay:false
    })
  }

  render() {
    const {icon, value, disabled, delay} = this.props;
    const classNamePreset = UX.build(this);
    if(delay && disabled){
      classNamePreset.push('config-disabled');
      this.setState({

      })
    }

    return (
      <a className={classNames('frame-button', classNamePreset,UX.build(this))} ><Icon icon={icon}>{value}</Icon></a>
    );
  }

}
Button.defaultProps = {
  themeRule: "primary",
  disabled:false,
  value:'',
  icon:''
};
Button.propsType = {
  icon: PropTypes.string,
  theme: PropTypes.string,
  disabled: PropTypes.bool,
  value: PropTypes.string,
};