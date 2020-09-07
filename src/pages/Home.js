import React from "react";
import { Row, Col, Carousel } from "antd";
import { images } from "../assets/iamgeslide";
import { icons } from "../assets/iconEvent";
import Slide from "../components/Slide";
import CategoryItem from "../components/CategoryItem";
import FlashSale from "../components/FlashSale";

import { LeftOutlined, RightOutlined } from "@ant-design/icons";

import "antd/dist/antd.css";
import "./index.css";

function Home() {
  return (
    <div className="body-home">
      <Row className="row-top-banner">
        <Row className="row-banner">
          <Col span={17} className="slideshow-banner">
            <Slide arrImg={images} />
          </Col>
          <Col span={7} className="col-right-banner">
            <Row
              className="banner"
              style={{
                backgroundImage:
                  "url(https://cf.shopee.vn/file/c0d6d4381f1879aa5a489f573f728aba_xhdpi)"
              }}
            ></Row>
            <Row
              className="banner"
              style={{
                backgroundImage:
                  "url(https://cf.shopee.vn/file/c0d6d4381f1879aa5a489f573f728aba_xhdpi)"
              }}
            ></Row>
          </Col>
        </Row>
        <Row className="row-bottom-banner">
          {icons.map((icon, index) => {
            return (
              <a className="box-item-bottom-banner" key={index}>
                <div className="body-item-bottom-banner">
                  <div className="content-item-bottom-banner">
                    <div
                      className="item-bottom-banner"
                      style={{ backgroundImage: `url(${icon.icon})` }}
                    ></div>
                  </div>
                </div>
                <div className="title-item">{icon.name}</div>
              </a>
            );
          })}
        </Row>
      </Row>

      <div
        className="package-banner"
        style={{
          backgroundImage:
            "url(https://cf.shopee.vn/file/b107aa9ffbffb88d16661d05d40a43a1_xxhdpi&quot)"
        }}
      ></div>
      <div className="row-category">
        <div className="header-section">
          <div className="section-header-title">Danh Mục</div>
        </div>
        <div className="list-category">
          <CategoryItem />
        </div>
      </div>

      <Row className="row-flash-sale">
        <p className="title-flash-sale">Flash Sale</p>
        <FlashSale />
      </Row>
    </div>
  );
}

export default Home;
