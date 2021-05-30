import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/actions/productAction";

const Home = () => {
  const dispatch = useDispatch();
  const { products, cart } = useSelector((state) => state.product);
  console.log("cart :>> ", cart);

  localStorage.setItem('cart', JSON.stringify(cart));

  
  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
   
  };
  return (
    <div className="container">
      <div className="row">
        {products.map((item,index) => (
          <div key={index} className="col-md-4 mt-5">
            <div className="card" style={{ width: "18rem" }}>
              <img src={item.image} alt="" />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">
                  Some quick example text to build on the card
                </p>
                <button onClick={() => handleAddToCart(item)}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
