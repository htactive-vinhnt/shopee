import React, { useEffect, useState } from "react";
import fb from "../firebase/firebase";
import { Row, Col, InputNumber, Button, Checkbox } from "antd";
import "./index.css";

function CartItem(props) {
  const { productID, amount } = props;
  let userID = window.localStorage.getItem("userID");
  const [product, setProduct] = useState({});
  const [txtAmount, setTxtAmount] = useState(amount);
  useEffect(() => {
    fb.database()
      .ref(`products/${productID}`)
      .on("value", function(snapshot) {
        setProduct(snapshot.val());
      });
  }, []);

  function onChange(value) {
    fb.database()
      .ref(`users/${userID}/cart/${productID}/amount`)
      .set(value);
    setTxtAmount(value);
  }
  function deleteCartItem() {
    fb.database()
      .ref(`users/${userID}/cart/${productID}`)
      .remove();
  }

  return (
    <div>
      <Row className="row-item-shopping-cart">
        <Col span={10}>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Checkbox></Checkbox>
            <div
              style={{
                backgroundImage: `url(${product.img_url})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                width: 100,
                height: 100
              }}
            ></div>
            <div>{product.name}</div>
          </div>
        </Col>
        <Col span={6}>
          <p>{product.price}</p>
        </Col>
        <Col span={3}>
          <InputNumber
            value={txtAmount}
            min={1}
            max={product.amount}
            step={1}
            onChange={onChange}
          />
        </Col>
        <Col span={3}>
          <p>{product.price * amount}</p>
        </Col>
        <Col>
          <Button onClick={() => deleteCartItem()}>Xoa</Button>
        </Col>
      </Row>
    </div>
  );
}

export default CartItem;
