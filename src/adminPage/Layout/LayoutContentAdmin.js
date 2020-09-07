import { Layout, Menu, Spin, Row, Col } from "antd";
import React, { Suspense } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import {
  PieChartOutlined,
  DesktopOutlined,
  ApartmentOutlined,
  TeamOutlined,
  ShoppingOutlined,
  ShopOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import { useHistory } from "react-router-dom";
const Dashboard = React.lazy(() => import("../pages/Dashboard/Dashboard"));
const CategoryList = React.lazy(() => import("../pages/Category/CategoryList"));
const ProductList = React.lazy(() => import("../pages/Product/ProductList"));

const antIcon = <LoadingOutlined style={{ fontSize: 100 }} spin />;

function LayoutContentAdmin() {
  const { Content, Sider } = Layout;
  let history = useHistory();
  return (
    <div >
      <BrowserRouter>
        <Layout>
          <Row style={{ width: "100%" }}>
            <Col span={5}>
              <Sider
                style={{
                  background: "rgb(250, 175, 62)",
                  height: 630,
                  position: "fixed",
                  zIndex: 100,
                  marginTop: 80,
                  width: "100%",
                }}
              >
                <Menu
                  defaultSelectedKeys={["1"]}
                  defaultOpenKeys={["sub1"]}
                  mode="inline"
                  theme="dark"
                  inlineCollapsed={true}
                  style={{ width: 200, height: "100%" }}
                >
                  <Menu.Item
                    key="1"
                    icon={<DesktopOutlined />}
                    //   onClick={() => history.push("/admin/")}
                  >
                    <Link to="/admin/">DashBoard</Link>
                  </Menu.Item>
                  <Menu.Item
                    key="2"
                    icon={<ApartmentOutlined />}
                    //   onClick={() => history.push("/admin/category-list")}
                  >
                    <Link to="/admin/category-list">Category</Link>
                  </Menu.Item>
                  <Menu.Item
                    key="3"
                    icon={<ShoppingOutlined />}
                    // onClick={() => history.push("/admin/product-list")}
                  >
                    <Link to="/admin/product-list">Product</Link>
                  </Menu.Item>
                  <Menu.Item
                    key="4"
                    icon={<TeamOutlined />}
                    onClick={() => history.push("/admin/user-list")}
                  >
                    Users
                  </Menu.Item>
                  <Menu.Item
                    key="5"
                    icon={<PieChartOutlined />}
                    onClick={() => history.push("/admin/analysis")}
                  >
                    Analysis
                  </Menu.Item>
                  <Menu.Item
                    key="6"
                    icon={<ShopOutlined />}
                    onClick={() => history.push("/admin/order-list")}
                  >
                    Order
                  </Menu.Item>
                </Menu>
              </Sider>
            </Col>
            <Col span={19}>
              <Content
                style={{
                  marginTop: 100,
                  height: 670,
                  width: "100%",
                  background: "#fff",
                }}
              >
                <Suspense
                  fallback={
                    <Spin
                      indicator={antIcon}
                      style={{
                        marginLeft: window.screen.width / 2 - 50,
                        marginTop: window.screen.height / 3
                      }}
                    />
                  }
                >
                  <Switch>
                    <Route
                      exact
                      path="/admin/"
                      name="Dashoard"
                      component={Dashboard}
                    />
                    <Route
                      path="/admin/category-list"
                      name="Category"
                      component={CategoryList}
                    />
                     <Route
                      path="/admin/product-list"
                      name="Product"
                      component={ProductList}
                    />
                  </Switch>
                </Suspense>
              </Content>
            </Col>
          </Row>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default LayoutContentAdmin;
