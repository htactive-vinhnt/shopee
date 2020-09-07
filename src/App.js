import React, { Suspense } from "react";
import "./App.css";
import "antd/dist/antd.css";
import {LoadingOutlined} from '@ant-design/icons';
import {Spin} from 'antd'
import { createBrowserHistory as history } from 'history';
import { BrowserRouter, Route, Switch, Redirect, withRouter } from "react-router-dom";

const MainLayout = React.lazy(() => import("./Layout/MainLayout"));
const Login = React.lazy(() => import("./pages/user/Login/Login"));
const Register = React.lazy(() => import("./pages/user/Register/Register"));
const Admin = React.lazy(() => import("./adminPage/Layout/MainLayoutAdmin"));
const Cart = React.lazy(()=> import('./pages/Cart/Cart'))



  const antIcon = <LoadingOutlined style={{ fontSize: 100 }} spin />;
 
function App() {
  
  return (
    <div className="App">
      <BrowserRouter history={history}>
      <Suspense fallback={<Spin indicator={antIcon} style={{ marginLeft: window.screen.width/2-50 , marginTop:window.screen.height/3 }}/>}>
          <Switch>
            <Route exact  path="/" name="Shop" component={MainLayout} />
            <Route path="/login" name="Login" component={Login} />
            <Route path="/register" name="Register" component={Register} />
            <Route path="/admin" name="Admin" component={Admin} />
            <Route path="/shopping-cart" name="ShoppingCart" component={Cart} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
