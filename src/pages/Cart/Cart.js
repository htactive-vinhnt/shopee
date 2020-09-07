import React, { useState, useEffect } from "react";
import "./cart.css";
import fb from "../../firebase/firebase";
import CartItem from "../../components/cartItem";
import { Row, Col, Input, Button } from "antd";
import HeaderLayout from "../../Layout/HeaderLayout";
import FooterLayout from "../../Layout/FooterLayout";
function Cart(props) {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  let userID = window.localStorage.getItem("userID");
  useEffect(() => {
    fb.database()
      .ref(`users/${userID}/cart`)
      .on("value", function(snapshot) {
        setCart(snapshot.val());
      });
  }, []);
  // function countPrice(priceItem) {
  //   setCart({ ...total, tatal: priceItem });
  // }
  console.log(total);

  return (
    <div>
      <div className="row-header">
        <HeaderLayout />
      </div>

      <Row style={{ paddingTop: 150 }}>
        <p style={{ fontSize: 30 }}>Shopping Cart</p>
      </Row>
      <Row>
        <Col span={10}>
          <h3>Sản Phẩm</h3>
        </Col>
        <Col span={6}>
          <h3>Đơn giá</h3>
        </Col>
        <Col span={3}>
          <h3>Số lượng</h3>
        </Col>
        <Col span={3}>
          <h3>Số Tiền</h3>
        </Col>
        <Col span={2}>
          <h3>Thao Tác</h3>
        </Col>
      </Row>
      <div>
        {Object.keys(cart || []).map((item, index) => {
          let price = Object.entries([cart[item]][0])[0][1].productObj.price;
          // setTotal({ ...total, total: price });

          return (
            <CartItem
              key={index}
              productID={item}
              amount={[cart[item]][0].amount}
              // countPrice={countPrice}
            />
          );
        })}
      </div>
      <Row>
        <Col span={18}>
          Mã Giảm Giá:
          <Input placeholder="Mã Giảm Giá" />
          <p>Tổng tiền:{total} </p>
        </Col>
        <Col span={6}>
          <Button type="primary" className="btn-buy">
            Mua Hàng
          </Button>
        </Col>
      </Row>

      <FooterLayout />
    </div>
  );
}

export default Cart;
