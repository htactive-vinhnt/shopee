import React, { useEffect, useState } from "react";
import { Row, Col, Modal, Button } from "antd";
import firebase from "../../../firebase/firebase";
import FormAdd from "./Form/Form";
import './index.css'
function CategoryList(props) {
  const [categoryArr, setCategoryArr] = useState([]);
  const [visible, setVisible ] =useState(false)
  useEffect(() => {
    firebase
      .database()
      .ref("category")
      .on("value", function (snapshot) {
        setCategoryArr(snapshot.val());
      });
  }, []);
  
  function showModal () {
    setVisible({
      visible: true
    });
  };

  function handleOk (e ) {
    setVisible(false);
  };

  function handleCancel(e) {
    setVisible(false);
  };

  return (
    <div className="category-list-page">
        <Button type="primary" onClick={() => showModal()}>
          Add Category
        </Button>
        <Modal
          title="Add Form"
          visible={visible}
          onOk={() => handleOk()}
          onCancel={()=>handleCancel()}
        >
          <FormAdd />
        </Modal>
     
      <Row>
        <Col span={24}>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Category Name</th>
                <th>Description</th>
                <th>Image</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(categoryArr || []).map((data, index) => {
                return (
                  <tr key={index}>
                    <td>{index}</td>
                    <td>{[categoryArr[data].name]}</td>
                    <td>{[categoryArr[data].description]}</td>
                    <td><img src={[categoryArr[data].img_url]} /></td>
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
}

export default CategoryList;
