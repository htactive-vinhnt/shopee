import React, { useEffect, useState } from "react";
import { Col, Row, Input, Menu, Dropdown, Button } from "antd";
import {
  SearchOutlined,
  FacebookOutlined,
  InstagramOutlined,
  BellOutlined,
  QuestionCircleOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { logo } from "../../assets/logo";
import { withRouter, useHistory } from "react-router-dom";
import './index.css';

function HeaderLayoutADmin(props) {
  let history = useHistory();
  return (
    <div className="body-header-content">
      
      <Row className="Row-menu-top-HeaderLayout">
        <Col span={4} className="col-logo">
          <svg
            style={{ fill: "#fff", width: 150, height: 100 }}
            viewBox="0 0 192 65"
          >
            <g fill-rule="evenodd">
              <path d={logo}></path>
            </g>
          </svg>
        </Col>
        <Col span={16} className="col">
         
        </Col>
        <Col span={4} className="col">
          <BellOutlined className="icon-cart" />
        </Col>
      </Row>
    </div>
  );
}

export default withRouter(HeaderLayoutADmin);
