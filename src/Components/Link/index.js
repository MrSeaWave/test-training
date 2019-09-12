import React, { Component } from 'react';

const STATUS = {
  HOVERED: 'hovered',
  NORMAL: 'normal',
};

class Link extends Component {
  constructor(props) {
    super(props);

    this.state = {
      class: STATUS.NORMAL,
    };
  }

  _onMouseEnter = () => {
    this.setState({ class: STATUS.HOVERED });
  };

  _onMouseLeave = () => {
    this.setState({ class: STATUS.NORMAL });
  };

  render() {
    const { page, children } = this.props;
    return (
      <a
        className={this.state.class}
        href={page || '#'}
        onMouseEnter={this._onMouseEnter}
        onMouseLeave={this._onMouseLeave}
      >
        {children}
      </a>
    );
  }
}

export default Link;
