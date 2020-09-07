import React, { useState } from "react";
import { Menu } from "antd";
import {
  PieChartOutlined,
  DesktopOutlined,
  ApartmentOutlined,
  TeamOutlined,
  ShoppingOutlined,
  ShopOutlined,
} from "@ant-design/icons";
import Routers from '../Router'
 import {useHistory} from 'react-router-dom'
function LayoutSiderAdmin() {
  let history = useHistory();
  return (
    <div style={{ width: '100%', height: "100%" }}>
      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        theme="dark"
        inlineCollapsed={true}
        style={{ width: 200, height: "100%" }}
      >
        <Menu.Item key="1" icon={<DesktopOutlined />} onClick={()=> history.push('/admin/')}>
          DashBoard
        </Menu.Item>
        <Menu.Item key="2" icon={<ApartmentOutlined />} onClick={()=> history.push('/admin/category-list')}>
          Category
        </Menu.Item>
        <Menu.Item key="3" icon={<ShoppingOutlined />} onClick={()=> history.push('/admin/product-list')}>
          Products
        </Menu.Item>
        <Menu.Item key="4" icon={<TeamOutlined />} onClick={()=> history.push('/admin/user-list')}>
          Users
        </Menu.Item>
        <Menu.Item key="5" icon={<PieChartOutlined />} onClick={()=> history.push('/admin/analysis')}>
          Analysis
        </Menu.Item>
        <Menu.Item key="6" icon={<ShopOutlined />} onClick={()=> history.push('/admin/order-list')}>
          Order
        </Menu.Item>
      </Menu>
      <Routers/>
    </div>
  );
}

export default LayoutSiderAdmin;
