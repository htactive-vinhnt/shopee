import React from "react";
import { Layout } from "antd";
import "./index.css";
import HeaderLayoutAdmin from "./HeaderLayoutAdmin";
import LayoutContentAdmin from "./LayoutContentAdmin";
 
function MainLayoutAdmin() {
  const { Header, Footer } = Layout;
  return (
    <div>
      <Layout>
        <Header
          style={{
            background: "linear-gradient(-180deg,#f53d2d,#f63)",
            height: 80,
            position: "fixed",
            zIndex: 100,
            width: "100%",
          }}
        >
          <HeaderLayoutAdmin />
        </Header>
        <LayoutContentAdmin/>
        <Footer className="footer-admin"> @2020 VinhDev</Footer>
      </Layout>
    </div>
  );
}

export default MainLayoutAdmin;
