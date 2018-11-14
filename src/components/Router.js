/**
 * Imports
 */
// Libraries
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Components
import StorePicker from './StorePicker';
import App from './App';
import NotFound from './NotFound';


/**
 * Component - Router
 */
export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={StorePicker} />
        <Route path="/store/:storeId" component={App} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}
