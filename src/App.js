import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
  Redirect,
  // useHistory,
  // useLocation
} from "react-router-dom";

import store from './store';
import {
  Provider,
  useSelector,
} from 'react-redux';

import './App.css';

import
{
  HomePage,
  EmployeePage,
  InventoryPage,
  LoginPage,
  ManagerPage,
  RegisterPage,
  DirectorPage
} from './pages'

function PrivateRoute({children, ...rest}) {
  const taiKhoan = useSelector(state => state.login.taiKhoan);
  return (
      <Route {...rest}>
        {taiKhoan ? (children) : (<Redirect to={"/dangnhap"}/>)}
      </Route>
  )
}

function App()
{
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <PrivateRoute path="/nhanvien">
            <EmployeePage />
          </PrivateRoute>
          <PrivateRoute path="/kho">
            <InventoryPage />
          </PrivateRoute>
          <Route exact path="/dangnhap">
            {/*<LoginPage type={'0'} />*/}
            <LoginPage />
          </Route>
          {/*<Route path={"dangnhap/khachhang"}>*/}
          {/*  <LoginPage type={'0'} />*/}
          {/*</Route>*/}
          {/*<Route path={"dangnhap/nhanvien"}>*/}
          {/*  <LoginPage type={'1'} />*/}
          {/*</Route>*/}
          <Route path="/dangki">
            <RegisterPage />
          </Route>
          <PrivateRoute path="/quanly">
            <ManagerPage />
          </PrivateRoute>
          <PrivateRoute path="/giamdoc">
            <DirectorPage />
          </PrivateRoute>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
