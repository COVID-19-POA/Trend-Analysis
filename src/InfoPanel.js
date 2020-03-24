import React, { Component } from 'react';

export class InfoPanel extends Component {
  render() {
    return(
      <div className="InfoPanel container">
        <h2>{this.props.title}</h2>
        { this.props.children }
      </div>
    );
  }
}