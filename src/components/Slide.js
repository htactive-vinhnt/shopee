import React from "react";
import { Carousel } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

function Slide(props) {
  const { arrImg } = props;
  const carousel = React.createRef();
  function nextt() {
    carousel.current.next();
  }
  function previous() {
    carousel.current.prev();
  }
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <LeftOutlined
        onClick={() => previous()}
        style={{ position: "absolute", fontSize: 30, zIndex: 20, top: 100 }}
      />
      <Carousel
        ref={carousel}
        dots={true}
        infinite={true}
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
        autoplay
        style={{ width: 1100, position: "relative" }}
        dots={true}
      >
        {arrImg.map((img_uri, index) => {
          return (
            <div key={index}>
              <div
                style={{
                  height: 235,
                  width: "100%",
                  backgroundImage: `url(${img_uri})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover"
                }}
              ></div>
            </div>
          );
        })}
      </Carousel>
      <RightOutlined
        style={{
          position: "absolute",
          fontSize: 30,
          zIndex: 20,
          right: 0,
          top: 100
        }}
        onClick={() => nextt()}
      />
    </div>
  );
}

export default Slide;
