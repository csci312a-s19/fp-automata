import React, { Component } from 'react';
//import Konva from 'konva';
//import { render } from 'react-dom';
import { Rect } from 'react-konva';

class Cell extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Rect
        x={this.props.x}
        y={this.props.y}
        height={this.props.dy}
        width={this.props.dx}
        fill={this.props.color}
      />
    );
  }
}

export default Cell;
