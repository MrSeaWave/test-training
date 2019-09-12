import React, { Component } from 'react';

class LinkAct extends Component {
  constructor(props) {
    super(props);

    this.state = {
      class: 'normal',
    };
  }

  UNSAFE_componentWillReceiveProps(nextProps, nextContext) {
    this.setState({ class: 'willRceiveProps' });
  }

  render() {
    const { page, children } = this.props;
    return (
      <a className={this.state.class} href={page || '#'}>
        {children}
      </a>
    );
  }
}

export default LinkAct;
