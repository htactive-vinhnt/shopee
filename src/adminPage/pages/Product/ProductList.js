import React, {useState, useEffect} from "react";
import { Row, Col, Modal, Button  } from "antd";
import firebase from "../../../firebase/firebase";
import AddProductForm from "./Form/Form";
import './index.css';

const ProductList = () => {
  const [productArr, setProductArr] = useState([]);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    firebase
      .database()
      .ref("products")
      .on("value", function (snapshot) {
        setProductArr(snapshot.val());
      });
  }, []);
  

  function showModal() {
    setVisible({
      visible: true,
    });
  }

  function handleOk(e) {
    setVisible(false);
  }

  function handleCancel(e) {
    setVisible(false);
  }
  console.log('san pham', productArr);
  return (
    <div className="product-list-page">
      <Button type="primary" onClick={() => showModal()}>
        Add Product
      </Button>
      <Modal
        title="Add Product Form"
        visible={visible}
        onOk={() => handleOk()}
        onCancel={() => handleCancel()}
      >
        <AddProductForm />
      </Modal>

      <Row>
        <Col span={24}>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>product Name</th>
                <th>Description</th>
                <th>Image</th>
                <th>Price</th>
                <th>Category</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(productArr || []).map((data, index) => {
                  console.log('data', [productArr[data].name]);
                return (
                  <tr key={index}>
                    <td>{index}</td>
                    <td>{[productArr[data].name]}</td>
                    <td>{[productArr[data].description]}</td>
                    <td>
                      <img src={[productArr[data].img_url]} />
                    </td>
                    <td>{[productArr[data].price]}</td>
                    <td>{[productArr[data].category]}</td>
                    <td>function</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Col>
      </Row>
    </div>
  );
};

export default ProductList;
