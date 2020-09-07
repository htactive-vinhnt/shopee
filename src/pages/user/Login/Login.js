import React, { useState } from "react";
import "./login.css";
import { Button, Input, Form, Spin, Checkbox, Row, Col } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import FooteLayout from "../../../Layout/FooterLayout";
import fb from "../../../firebase/firebase";
import { withRouter, useHistory } from "react-router-dom";

function Login(props) {
  const history = useHistory();
  const onFinish = values => {
    fb.auth()
      .signInWithEmailAndPassword(values.username, values.password)
      .then(res => {
        fb.database()
          .ref(`users/${res.user.uid}`)
          .on("value", function(snapshot) {
            let user = Object.keys(snapshot.val()).map((data, index) => {
              if (index === 0) {
                return (user = [snapshot.val()[data]]);
              }
            });

            console.log("Success:", user[0][0].id);
            window.localStorage.setItem("userID", user[0][0].id);
            window.localStorage.setItem("userName", user[0][0].username);
            window.localStorage.setItem("userAvatar", user[0][0].avatar);
            window.localStorage.setItem(
              "shoppingcart",
              "sadfsjhagshjasdfajdhu"
            );
            history.push("/");
          });
      })
      .catch(error => {
        console.log("login error:", error);
      });
  };

  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };

  let high = window.screen.height;
  return (
    <div>
      <Row
        className="login-page"
        style={{
          height: high,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundImage:
            "url(https://danongviet.vn/wp-content/uploads/2020/04/thoi-trang-nam-han-quoc-danongviet.vn-cover-800x520.jpg)"
        }}
      >
        <Col span={12}></Col>
        <Col span={12}>
          <Form
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            className="login-form"
          >
            <h3 className="login-title">Login Form</h3>
            <Form.Item
              name="username"
              rules={[{ required: true, message: "Username or Email" }]}
              className="login-form-item"
            >
              <Input type="email" name="txtEmail" />
            </Form.Item>

            <Form.Item
              className="login-form-item"
              name="password"
              rules={[{ required: true, message: "Password" }]}
            >
              <Input.Password name="txtPassword" />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item className="login-form-item">
              <Button type="primary" htmlType="submit" className="btn-login">
                Login
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
      <FooteLayout />
    </div>
  );
}

export default withRouter(Login);
