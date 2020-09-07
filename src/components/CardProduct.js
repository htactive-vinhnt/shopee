import React from "react";
import { connect } from "react-redux";
import { Row, Button } from "antd";
import { addToCardDoing } from "../redux/Card/action";
import fb from "../firebase/firebase";
function CardProduct(props) {
  const { product, id } = props;
  function price(product) {
    if (product.discount) {
      const newprice =
        product.price - (parseInt(product.price) / 100) * product.discount;
      return (
        <Row>
          <del>{product.price} vnd /</del>
          <p>{newprice} vnd</p>
        </Row>
      );
    } else {
      return <p>{product.price} vnd</p>;
    }
  }
  function addToCardUser(userID, productID, productObj) {
    if (userID) {
      let product
      fb.database()
        .ref(`users/${userID}/cart`)
        .on("value", function (snapshot) {
         
          //  return(

          product = Object.keys(snapshot.val() || []).find(
            (data) => data === productID
          );
          
         
        }
        
        )
        if (product) {
          let count
          fb.database().ref(`users/${userID}/cart/${productID}/amount`).on('value', function(snapshot){
            count = (snapshot.val())
          })
          fb.database().ref(`users/${userID}/cart/${productID}/amount`).set(count + 1);
         
        } else {
          fb.database()
            .ref(`users/${userID}/cart/${productID}`)
            .push({ productObj }).then(res => {
              fb.database().ref(`users/${userID}/cart/${productID}/amount`).set(1);
            })   
        }
    } else {
      alert("You must Login");
    }
  }
  return (
    <a className="card-product">
      <div
        className="image-product"
        style={{
          backgroundImage: `url(${product.img_url})`,
        }}
      ></div>
      <div className="ỉnfo-product">
        <div className="name-product">{product.name}</div>
        <div>{price(product)}</div>
        {() => {
          if (product.discount) {
            return <div className="discount-product">{product.discount} %</div>;
          }
        }}
        <Button
          className="btn-add-to-cart"
          onClick={async () =>
            addToCardUser(await window.localStorage.getItem("userID"), id, product)
          }
        >
          Add To Cart
        </Button>
      </div>
    </a>
  );
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addToCard: (userID, productID) => {
      dispatch(addToCardDoing(userID, productID));
    },
  };
};

export default connect(null, mapDispatchToProps)(CardProduct);
