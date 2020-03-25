import React, { Component } from 'react';
import { Input } from 'antd';

export class IntegerInput extends Component {
  onChange = (event) => {
    const value = parseInt(event.target.value);
    if (Number.isInteger(value) && value >= 0) {
      this.props.onChange(value)
    }
  }

  render() {
    return (
      <Input
        {...this.props}
        maxLength={11}
        onChange={this.onChange}
      />
    );
  }
}