import React, {Suspense} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {LoadingOutlined} from '@ant-design/icons';
import {Spin} from 'antd'
import {createBrowserHistory as history } from 'history';
const Dashboard = React.lazy(() =>
    import('./pages/Dashboard/Dashboard'));
const CategoryList = React.lazy(() =>
    import('./pages/Category/CategoryList'));
    const antIcon = <LoadingOutlined style={{ fontSize: 100 }} spin />;
function Routes(){
   return(
       <div>
    <BrowserRouter history={history}>
      <Suspense fallback={<Spin indicator={antIcon} style={{ marginLeft: window.screen.width/2-50 , marginTop:window.screen.height/3 }}/>}>
          <Switch>
            <Route exact path="/admin/" name="Dashoard" component={Dashboard} />
            <Route path="/admin/category-list" name="Category" component={CategoryList} />
          </Switch>
        </Suspense>
      </BrowserRouter>
       </div>
   )
}

export default Routes;
