import React, { Suspense } from "react";
import { Layout, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import "./index.css";
import HeaderLayout from "./HeaderLayout";
import FooterLayout from "./FooterLayout";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
const Home = React.lazy(() => import("../pages/Home"));

const antIcon = <LoadingOutlined style={{ fontSize: 100 }} spin />;

function MainLayout() {
  let history = useHistory();
  const { Header, Footer, Content } = Layout;

  return (
    <div>
      <Layout>
        <Header
          style={{
            background: "linear-gradient(-180deg,#f53d2d,#f63)",
            height: 130,
            position: "fixed",
            zIndex: 100,
            width: "100%"
          }}
        >
          <HeaderLayout />
        </Header>

        <Content style={{ marginTop: 130, background: "#fff", width: "100%" }}>
          <BrowserRouter history={history}>
            <Switch>
              <Route path="/" name="Home" component={Home} />
            </Switch>
          </BrowserRouter>
        </Content>

        <Footer className="footer">
          <FooterLayout />
        </Footer>
      </Layout>
    </div>
  );
}

export default MainLayout;
