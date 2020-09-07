import React, { useState, useEffect } from "react";
import { Carousel, Row } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import CardProduct from "./CardProduct";
import "./index.css";
import fb from "../firebase/firebase";

function FlashSale(props) {
  const carousel = React.createRef();
  const [productList, setProductList] = useState([]);
  const [productID, setProdutID] = useState();

  useEffect(() => {
    return fb
      .database()
      .ref("products")
      .on("value", function(snapshot) {
        setProductList(snapshot.val());
      });
  }, []);

  function nextt() {
    carousel.current.next();
  }
  function previous() {
    carousel.current.prev();
  }

  return (
    <div className="flash-sale-content">
      <LeftOutlined onClick={() => previous()} className="icon-left-outlined" />
      <Carousel
        ref={carousel}
        slidesToShow={5}
        slidesToScroll={5}
        className="carousel-flash-sale"
      >
        {Object.keys(productList || []).map((product, index) => {
          return (
            <CardProduct
              key={index}
              product={productList[product]}
              id={product}
            />
          );
        })}
      </Carousel>
      <RightOutlined className="icon-right-outlined" onClick={() => nextt()} />
    </div>
  );
}

export default FlashSale;
