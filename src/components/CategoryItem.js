import React, { useState, useEffect } from "react";
import {Row} from 'antd';
// import { categoryImage } from "../assets/categoryImage";
import firebase  from '../firebase/firebase'

function CategoryItem(props) {
  const [categoryArr, setCategoryArr] = useState([])
  useEffect(() => {
    firebase.database().ref('category').on('value', function(snapshot){
      setCategoryArr(snapshot.val())
    })
  }, []);
  return (
    <div className="image-category-item-list">
      {Object.keys(categoryArr || []).map((item, index) => {
        return (
          <a className="border-item" key={index}>
            <Row className="body-item">
              <div
                style={{
                  backgroundImage: `url(${[categoryArr[item].img_url]})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  width: 120,
                  height: 120,
                }}
              >
                 
              </div>
            
            </Row>
            <div className="title-category">
            <p style={{ height: 30, width: 120, bottom: 0, textAlign: 'center'}}>{[categoryArr[item].name]}</p>
            </div>
          </a>
          
        );
      })}
    </div>
  );
}

export default CategoryItem;
