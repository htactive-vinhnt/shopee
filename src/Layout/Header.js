import React, {useEffect, useState} from 'react';
import './index.css'
import {Row, Col, Menu, Dropdown, Button} from 'antd';
import {FacebookOutlined, InstagramOutlined, BellOutlined, QuestionCircleOutlined} from '@ant-design/icons';
import {useHistory} from 'react-router-dom';
import fb from '../firebase/firebase';
const Header = () => {
    let history = useHistory();
  const [user, setUser] = useState({
    userID: "",
    username: "",
    avatar: "",
  });
  useEffect(async () => {
    await setUser({
      userID: window.localStorage.getItem("userID"),
      username: window.localStorage.getItem("userName"),
      avatar: window.localStorage.getItem("userAvatar"),
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
        
            <Row className="Row-menu-top-HeaderLayout"  style={{
              background: "linear-gradient(-180deg,#f53d2d,#f63)",
              height: 50,
              position: "fixed",
              zIndex: 100,
              width: '100%',
            }}>
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
       
    );
}

export default Header;
