import React, { useState } from "react";
import "./register.css";
import { Button, Input, Form, Row, Col } from "antd";
import FooteLayout from "../../../Layout/FooterLayout";
import fb from '../../../firebase/firebase';
import { withRouter, useHistory } from 'react-router-dom';



function Register(props) {
  const history = useHistory()

  const onFinish = (values) => {
    if(values.password === values.password_config){
      fb.auth().createUserWithEmailAndPassword(values.username, values.password).then(async res => {
      
        fb.database().ref(`users/${res.user.uid}`).push({
          id: res.user.uid,
          name: '',
          username: '',
          phone:'',
          gender: '',
          email: values.username,
          avatar: 'https://static1.squarespace.com/static/54b7b93ce4b0a3e130d5d232/54e20ebce4b014cdbc3fd71b/5a992947e2c48320418ae5e0/1519987239570/icon.png?format=1500w',
          dob: '',
          address: '',
          type: 'buyer',
        })
    
         history.push('/login'); 
      
   }).catch(error => {
       console.log('register error:', error);
     })
    }
   else{
     alert('password config incorect')
   }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };


  
  let high = window.screen.height;
  return (
    <div>
      <Row className="register-page" style={{ height: high,
        backgroundSize: 'cover', backgroundRepeat: 'no-repeat',
         backgroundImage: 'url(https://danongviet.vn/wp-content/uploads/2020/04/thoi-trang-nam-han-quoc-danongviet.vn-cover-800x520.jpg)' }} >
        <Col span={12}>
        
        </Col>
        <Col span={12}>
          <Form
            name="register"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            className="register-form"
          >
            <h3 className="register-title">Register Form</h3>
            <Form.Item
              name="username"
              rules={[{ required: true, message: "Username or Email" }]}
              className="register-form-item"
            >
              <Input type="email" name="txtEmail" />
            </Form.Item>

            <Form.Item
              className="register-form-item"
              name="password"
              rules={[{ required: true, message: "Password" }]}
            >
              <Input.Password name="txtPassword" />
            </Form.Item>
            <Form.Item
              className="register-form-item"
              name="password_config"
              rules={[{ required: true, message: "Password Config" }]}
            >
              <Input.Password name="txtPasswordConfig" />
            </Form.Item>

            <Form.Item className="register-form-item">
              <Button type="primary" htmlType="submit" className="btn-register">
                Register
              </Button>
            </Form.Item>
            <Form.Item className="register-form-item">
              If you already have an account
                {""}<a onClick={() => history.push('/login')}>
                Login
              </a>
            </Form.Item>
          </Form>
        </Col>
      </Row>
      <FooteLayout />
    </div>
  );
}

export default withRouter(Register);
