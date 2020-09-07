import React, { Suspense } from "react";
import "./index.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "antd/dist/antd.css";
import { createBrowserHistory as history } from 'history';
import {LoadingOutlined} from '@ant-design/icons';
import {Spin} from 'antd'

const MainLayoutAdmin = React.lazy(() => import("./Layout/MainLayoutAdmin"));

const antIcon = <LoadingOutlined style={{ fontSize: 100 }} spin />;
function index() {
  return (
    <div>
      <BrowserRouter history={history}>
        <Suspense
          fallback={
            <Spin
              indicator={antIcon}
              style={{
                marginLeft: window.screen.width / 2 - 50,
                marginTop: window.screen.height / 3,
              }}
            />
          }
        >
          <Switch>
            <Route
              exact
              path="/admin/"
              name="Dashboard"
              component={MainLayoutAdmin}
            />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default index;
