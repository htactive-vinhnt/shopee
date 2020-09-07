import React from "react";
import { Row, Col } from "antd";
import { pay } from "../assets/iconPay";
import { ShippingUnit } from "../assets/IconShippingUnit";
import {
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import './index.css';
function FooterLayout() {
  return (
    <div>
      <Row className="row-top"></Row>
      <Row className="row-content">
        <Col className="col-more-info">
          <h4>CHĂM SÓC KHÁCH HÀNG</h4>
          <p>Trung Tâm Trợ Giúp</p>
          <p>Shopee Blog</p>
          <p>Shopee Mail</p>
          <p>Hướng Dẩn Mua Hàng</p>
          <p>Hướng Dẩn Bán Hàng</p>
          <p>Thanh Toán</p>
          <p>Shopee Xu</p>
          <p>Vận Chuyển</p>
          <p>Trả Hàng & Hoàn Tiền</p>
          <p>Chăm Sóc Khách Hàng</p>
          <p>Chính Sách Bảo Hành</p>
        </Col>
        <Col className="col-more-info">
          <h4>VỀ SHOPEE</h4>
          <p>Giới thiệu về Shopee Việt Nam</p>
          <p>Tuyển dụng</p>
          <p>Điều khoản shopee</p>
          <p>Chính sách bảo mật</p>
          <p>Chính hãng</p>
          <p>Kênh người Bán</p>
          <p>Flash sales</p>
          <p>Chương trình Tiếp Thị Liên Kết Shopee</p>
          <p>Liên Hệ Với Truyền Thông</p>
        </Col>
        <Col className="col-more-info">
          <h4>THANH TOÁN</h4>

          {pay.map((item) => {
            return <img src={item} style={{ width: 60, height: 60 }} />;
          })}

          <h4>ĐƠN VỊ VẬN CHUYỂN</h4>

          {ShippingUnit.map((item) => {
            return <img src={item} style={{ width: 55, height: 30 , margin: 4}} />;
          })}
        </Col>
        <Col className="col-more-info">
          <h4>THEO DỎI CHÚNG TÔI TRÊN</h4>
          <div style={{color:'black', fontSize: 15, margin: 3}}>
            <FacebookOutlined /> facebook
          </div>
          <div style={{color:'black', fontSize: 15, margin: 3}}>
            <InstagramOutlined /> Instagram
          </div>
          <div style={{color:'black', fontSize: 15, margin: 3}}>
            <LinkedinOutlined /> Linkedin
          </div>
        </Col>
        <Col className="col-more-info">
          <h4>TẢI ỨNG DỤNG SHOPEE NGAY THÔI</h4>
        </Col>
      </Row>
      <Row className="row-bottom">
          <div>@2020 VinhDev. Tất cả đều bảo liệu.</div>
          <div className="nation-bar">
              Quốc gia & Khu vực: 
              <p>Singapore</p>|
              <p>Indonesia</p>|
              <p>Đài Loan</p>|
              <p>Thái Lan</p>|
              <p>Malaysia</p>|
              <p>Việt Nam</p>|
              <p>Philipin</p>|
              <p>Brazil</p>
          </div>
      </Row>
      <Row className="row-info-company">
          <div className='info-company'>
                <div className='menu-top-info'>
                    <div><span>CHÍNH SÁCH BẢO MẬT</span></div>
                    <div><span>QUY CHẾ HOẠT ĐỘNG</span></div>
                    <div><span>CHÍNH SÁCH VẬN CHUYỂN</span></div>
                    <div><span>CHÍNH SÁCH TRẢ HÀNG VÀ HOÀN TIỀN</span></div>
                </div>
                <div className='info-certification'>
                    <img className='certification' src="https://salavietnam.vn/dataimages/images/20150827110756-dadangky.png" />
                    <img className='certification' src="https://salavietnam.vn/dataimages/images/20150827110756-dadangky.png" />
                    <img className='certification' src="https://salavietnam.vn/dataimages/images/20150827110756-dadangky.png" />
                </div>
                <div className='name-company'>
                Công ty TNHH Shopee

                </div>
                <div className='info-contact'>
                Địa chỉ: Tầng 28, Tòa nhà trung tâm Lotte Hà Nội, 54 Liễu Giai, phường Cống Vị, Quận Ba Đình, Hà Nội. Tổng đài hỗ trợ: 19001221 - Email: cskh@hotro.shopee.vn
                </div>
                <div className='info-contact'>
                Mã số doanh nghiệp: 0106773786 do Sở Kế hoạch & Đầu tư TP Hà Nội cấp lần đầu ngày 10/02/2015  
                </div>
                <div className='info-contact'>
                © 2015 - Bản quyền thuộc về Công ty TNHH Shopee      
                </div>
               
          </div>
      </Row>
    </div>
  );
}

export default FooterLayout;
