import React from 'react';
import
{
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import store from './store';
import { Provider } from 'react-redux';

import './App.css';

import
{
  HomePage,
  EmployeePage,
  InventoryPage
} from './pages'

function App()
{
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/employee">
            <EmployeePage />
          </Route>
          <Route path="/kho">
            <InventoryPage />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
