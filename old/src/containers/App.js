import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Home from '../components/Home';

@connect(
  state => ({
  }),
  {
  }
)

export default class App extends Component {
  render() {
    return (
      <div>
        <Dashboard {...this.props} path="/"/>
      </div>
    );
  }
}
