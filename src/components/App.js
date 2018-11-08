/**
 * Imports
 */
// Libraries
import React, { Component } from 'react';

// Components
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';


/**
 * Component - App
 *
 * Wrapper component that all state will lie.
 */
export default class App extends Component {
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header />
        </div>
        <Order />
        <Inventory />
      </div>
    );
  }
}
