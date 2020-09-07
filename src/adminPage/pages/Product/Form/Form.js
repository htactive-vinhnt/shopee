import React, { useState, useEffect } from "react";
import { Input, Form, Button, Upload, Row, Select } from "antd";
import firebase from "../../../../firebase/firebase";
import "./Form.css";
function AddProductForm(props) {
  
    const { TextArea } = Input;
  const { Option } = Select;
  const [IMG_URL, setIMG_URL] = useState();
  const [categoryArr, setCategoryArr] = useState([]);
  useEffect(() => {
    firebase.database().ref('category').on('value', function (snapshot){
      setCategoryArr(snapshot.val())
    } )
  }, []);
  const onFinish = (values) => {
    console.log("amge", values.image);
    let uploadImage = firebase
      .storage()
      .ref(`/products/${values.name}`)
      .put(values.image.fileList[0].originFileObj);
    uploadImage
      .on(
        "state_changed",
        (snapShot) => {
          console.log(snapShot);
        },
        (err) => {
          console.log(err);
        },
        async () => {
          await firebase
            .storage()
            .ref("products")
            .child(values.name)
            .getDownloadURL()
            .then(async (fireBaseUrl) => {
              setIMG_URL((prevObject) => ({
                ...prevObject,
                IMG_URL: fireBaseUrl,
              }));
              let product = {
                name: values.name,
                description: values.description,
                img_url: fireBaseUrl,
                price: values.price,
                category: values.category,
                amount: values.amount,
                nsx: values.nsx,
              };
              firebase
                .database()
                .ref(`products/`)
                .push(product)
                .then((res) => {
                  console.log(res);
                })
                .catch((err) => console.log("error:", err));
            })
            .catch((err) => console.log("err stoger download", err));
        }
      )
      .catch((err) => console.log("err when put image:", err));
   
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Row className="row-add-product">
      <Form
        name="add-product-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        className="add-product-form"
      >
        <Form.Item
          label="Product Name"
          name="name"
          rules={[{ required: true, message: "product name" }]}
          className="add-form-product-item"
        >
      
          <Input type="text" name="name-product" />
        </Form.Item>
        <Form.Item
          label='Price'
          name="price"
          rules={[{ required: true, message: "please input price" }]}
          className="add-form-product-item"
        >
          
          <Input type="number" />
        </Form.Item>
        <Form.Item
        label='Amount'
          name="amount"
          rules={[{ required: true, message: "please input amount" }]}
          className="add-form-product-item"
        >
        
          <Input type="number" />
        </Form.Item>
        <Form.Item
          label='Producer'
          name="nsx"
          rules={[{ required: true, message: "please input nsx" }]}
          className="add-form-product-item"
        >
      
          <Input type="text" />
        </Form.Item>
        <Form.Item
          label='Category'
          name="category"
          rules={[{ required: true, message: "please chose category" }]}
          className="add-form-product-item"
        >
        
          <Select
            style={{ width: 120 }}
          >
            {Object.keys(categoryArr || []).map(category => {
              return(
                <Option value={[categoryArr[category].name]}>{[categoryArr[category].name]}</Option>
              )
            })}
            
          </Select>
        </Form.Item>
        <Form.Item
          label='Description'
          className="add-form-product-item"
          name="description"
          rules={[{ required: true, message: "description" }]}
        >
          
          <TextArea name="description" />
        </Form.Item>

        <Form.Item
        label={"Image",<img src={IMG_URL} />}          className="add-form-product-item"
          name="image"
          rules={[{ required: true, message: "image" }]}
        >
          
          <Upload>
            <Button>Upload Image</Button>
          </Upload>
        </Form.Item>

        <Form.Item className="add-form-product-item">
          <Button type="primary" htmlType="submit" className="btn-add-product">
            Add
          </Button>
        </Form.Item>
      </Form>
    </Row>
  );
}

export default AddProductForm;
