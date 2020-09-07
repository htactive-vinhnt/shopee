import React, {useState, useEffect} from "react";
import { Input, Form, Button, Upload, Row } from "antd";
import firebase from '../../../../firebase/firebase';
import './Form.css'
function FormAdd(props) {

    const { TextArea } = Input;
    const [IMG_URL, setIMG_URL] = useState();
   

    const onFinish = (values) => {
        console.log("amge", values.image);
      let uploadImage = firebase.storage().ref(`/category/${values.name}`).put(values.image.fileList[0].originFileObj)
      uploadImage.on('state_changed', 
      (snapShot) => {
        console.log(snapShot)
      }, (err) => {
  
        console.log(err)
      },async () => {
        
       await firebase.storage().ref('category').child(values.name).getDownloadURL()
         .then(async fireBaseUrl => {
         setIMG_URL(prevObject => ({...prevObject, IMG_URL: fireBaseUrl}))
         let Category = {
            name: values.name, description: values.description, img_url: fireBaseUrl
         }
          firebase.database().ref(`category/`).push(Category).then(res => {
              console.log('databae', res);
          }).catch(err => console.log('error:', err))
         }).catch(err => console.log('err stoger download', err))
      }).catch(err => console.log('err when put image:', err))
    };
  
    const onFinishFailed = (errorInfo) => {
      console.log("Failed:", errorInfo);
    };
  return (
    <Row className='row-add-category'>
    
      <Form
        name="add-category"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        className="add-form"
      >
        
        <Form.Item
          name="name"
          rules={[{ required: true, message: "category name" }]}
          className="add-form-category-item"
        >

          <Input type="text" name="name-category" />
        </Form.Item>

        <Form.Item
          className="add-form-category-item"
          name="description"
          rules={[{ required: true, message: "description" }]}
        >
          <TextArea name="description" />
        </Form.Item>

        <Form.Item
          className="add-form-category-item"
          name="image"
          rules={[{ required: true, message: "image" }]}
        >
          <Upload >
            <Button>
              Upload Image
            </Button>
          </Upload>
        </Form.Item>

        <Form.Item className="add-form-category-item">
          <Button type="primary" htmlType="submit" className="btn-add-category">
            Add
          </Button>
        </Form.Item>
      </Form>
    
  </Row>
  );
}

export default FormAdd;
