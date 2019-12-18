import React, {useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import {
  employeeAutoLoginRequest,
  employeeLoggingFailure,
  employeeLoggingSuccess,
  logout
} from './store/login'

import store from './store';
import {
  Provider,
  useSelector,
  useDispatch
} from 'react-redux';

import {
    Result,
    Button
} from "antd";

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
  const dispatch = useDispatch();
  const account = useSelector(state => state.login.account);

  useEffect(() => {
    dispatch(employeeAutoLoginRequest(
        null,
        (account)=> dispatch(employeeLoggingSuccess(account)),
        (err) => dispatch(employeeLoggingFailure(err))
    ))
  }, [dispatch]);

  return (
      <Route {...rest}>
        {account ? (children) : (<Redirect to={"/dangnhap"}/>)}
      </Route>
  )
}

function Logout(props) {

  const dispatch = useDispatch();
  const account = localStorage.getItem('azor.jewelry.token');
  useEffect(()=> {
    dispatch(logout());
  }, [dispatch]);

  return(
      account ?
          (<Redirect to={'/dangnhap'} />) :
          (<Redirect to={'/404'}/>)
  )
}

function NotFoundPage(props){
  return(
      <Result
          status="404"
          title="404"
          subTitle="Sorry, the page you visited does not exist."
          extra={<Button type="primary">
            <a href={'/'}>
              Back Home
            </a></Button>}
      />
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
            <LoginPage />
          </Route>
          <Route exact path={"/dangxuat"}>
            <Logout/>
          </Route>
          <Route path="/dangki">
            <RegisterPage />
          </Route>
          <Route path={'/404'}>
            <NotFoundPage/>
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
