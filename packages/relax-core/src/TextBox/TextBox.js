import React from 'react';
import ReactDom from 'react-dom';


export default class TextBox extends React.Component {
  constructor (props) {
    super (props);
    this.state = {value: '', type: 'text', PlaceHolder: ''};
    this.handleChange = this.handleChange.bind(this)
  }
  render () {
    return (
      <input
        onChange = {this.handleChange}
        value={this.state.value}
        type={this.state.type}
        placeholder={this.state.PlaceHolder}
      />
    );
  }
  handleChange (event) {
    this.setState ({
      value: event.target.value,
    });
  }
}

