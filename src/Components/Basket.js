import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleDecrementItem, handleIncrementItem } from "../redux/actions/productAction";

export default function Basket(props) {
    const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.product);

  const handleDecrement = (id) => {
      dispatch(handleDecrementItem(id))
  }
  const handleInecrement = (id) => {
    dispatch(handleIncrementItem(id))
}

  const itemPrice= cart.reduce((acc, item) => (parseFloat(item.price) * parseInt(item.qty)) + acc,0);
  const tax = itemPrice * 10 / 100;
  let shippingCost = 0;

  if(itemPrice > 50){
      shippingCost = 10
  }

  const grandTotal = (itemPrice + tax + shippingCost)


  return (
    <div className="cart container">
      <h2>Cart Items : {cart.length}</h2>
      <div className="">
        {cart.length > 0 && cart.map(cartItem => (
          <div className="row">
            <div className="productName">{cartItem.name}</div> 
            <div className="incrementDecrement">
              <button onClick={()=> handleDecrement(cartItem.id)} className="remove">-</button>{" "}
              <button onClick={()=> handleInecrement(cartItem.id)} className="add">+</button>
            </div>

            <div className="qtyMultiPrice">{cartItem.qty} x ${cartItem.price}</div>
          </div>
        ))}

        <>
          <hr></hr>
          <div className="row">
            <div className="col-2">Items Price</div>
            <div className="col-1 text-right">${itemPrice.toFixed(2)}</div>
          </div>
          <div className="row">
            <div className="col-2">Tax</div>
            <div className="col-1 text-right">${tax.toFixed(2)}</div>
          </div>
          <div className="row">
            <div className="col-2">Shipping</div>
            <div className="col-1 text-right">${shippingCost.toFixed(2)}</div>
          </div>

          <div className="row">
            <div className="col-2">
              <strong>Total Price</strong>
            </div>
            <div className="col-1 text-right">
              <strong>${grandTotal.toFixed(2)}</strong>
            </div>
          </div>
          <hr />
          <div className="row">
            <button>Checkout</button>
          </div>
        </>
      </div>
    </div>
  );
}
