import React from 'react';
import App from './App.jsx';

export default React.createClass({

  getInitialState() {
    return {};
  },

  componentDidMount() {
  },

  componentWillUnmount() {
  },

  handleClear(e) {
    ActionCreator.clearList();
  },

  render() {
    return (
      <App />
    );
  }
});
