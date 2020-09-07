import React, { useEffect, useState } from "react";
import { Col, Row, Input, Menu, Dropdown, Button, Modal } from "antd";
import {
  SearchOutlined,
  FacebookOutlined,
  InstagramOutlined,
  BellOutlined,
  QuestionCircleOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { logo } from "../assets/logo";
import { Redirect, withRouter, useHistory } from "react-router-dom";
import fb from "../firebase/firebase";
import './index.css';

const { Search } = Input;
function HeaderLayout(props) {

  let history = useHistory();
  const [user, setUser] = useState({
    userID: "",
    username: "",
    avatar: "",
  });
  const [cart, setCart] = useState([]);
  
  useEffect(async () => {
    await setUser({
      userID: window.localStorage.getItem("userID"),
      username: window.localStorage.getItem("userName"),
      avatar: window.localStorage.getItem("userAvatar"),
    });
    await fb.database()
      .ref(`users/${window.localStorage.getItem("userID")}/cart`)
      .on("value", function (snapshot) {

        // console.log("dasd",user.userID);
        setCart(snapshot.val());
      });
  }, []);

  

  function NoneUser() {
    return (
      <div>
        <button
          className="btn-user-header"
          onClick={() => history.push('/register')}
        >
          Đăng Ký
        </button>{" "}
        |
        <button
          className="btn-user-header"
          onClick={() =>history.push('/login')}
        >
          Đăng Nhập
        </button>
      </div>
    );
  }
  function UserDefine() {
    const menuUser = (
      <Menu>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer">
            Tài Khoản của tôi
          </a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer">
            Đơn hàng
          </a>
        </Menu.Item>
        <Menu.Item
          onClick={() =>
              fb
              .auth()
              .signOut()
              .then(
                () => window.localStorage.removeItem("userID"),
                window.localStorage.removeItem("userName"),
                window.localStorage.removeItem("userAvatar")
              )
              .then(() => window.location.reload())
          }
        >
          <a target="_blank" rel="noopener noreferrer">
            Đăng xuất
          </a>
        </Menu.Item>
      </Menu>
    );
    return (
      <div>
        <Dropdown overlay={menuUser} placement="bottomLeft">
          <Button>
            <div
              style={{ backgroundImage: `url(${user.avatar})` }}
              className="avatar-user"
            ></div>
          </Button>
        </Dropdown>
      </div>
    );
  }

  function checkUser() {
    if (user.userID !== null) {
      return <UserDefine />;
    } else {
      return <NoneUser />;
    }
  }

  
  return (
    <div className="body-header-content">
      <Row className="Row-menu-top-HeaderLayout">
        <Col span={12} className="menu-top-left-HeaderLayout">
          <div>kênh người bán</div> | <div>Tải ứng dụng</div> |{" "}
          <div>
            Kết nối <FacebookOutlined className="icon-top-menu-HeaderLayout" />{" "}
            <InstagramOutlined className="icon-top-menu-HeaderLayout" />
          </div>
        </Col>
        <Col span={12} className="menu-top-right-HeaderLayout">
          <div>
            {" "}
            <BellOutlined className="icon-top-menu-HeaderLayout" /> Thông báo
          </div>{" "}
          <div>
            {" "}
            <QuestionCircleOutlined className="icon-top-menu-HeaderLayout" />{" "}
            Trợ giúp
          </div>
          <div className="group-item-menu">{checkUser()}</div>
        </Col>
      </Row>
      <Row className="Row-menu-top-HeaderLayout">
        <Col span={4} className="col-logo" onClick={() => history.push('/')}>
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
          <Row style={{ width: "100%", height: 60 }}>
            <SearchOutlined className="icon-search" />{" "}
            <Input
              style={{ position: "relative", height: 40 }}
              onSearch={(value) => console.log(value)}
            />
            <div className="menu-search">
              <p>đầm nử</p>
              <p>sandal nử</p>
              <p>giầy nam</p>
              <p>dép nam</p>
              <p>áo nử</p>
              <p>balo nử</p>
              <p>áo khoác nam</p>
              <p>váy trăng</p>
            </div>
          </Row>
        </Col>
        <Col span={4} className="col">
          <ShoppingCartOutlined
            className="icon-cart"
            onClick={()=> history.push('/shopping-cart')}
          />
          <p style={{color: 'yellow', fontSize: 20}}>{Object.keys(cart||[]).length}</p>
        </Col>
       
      </Row>
    </div>
  );
}

export default HeaderLayout;
