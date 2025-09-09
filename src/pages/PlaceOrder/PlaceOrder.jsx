import React from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../context/StoreContext";
import { useContext } from "react";


const PlaceOrder = () => {

  const { getTotalCartAmount } = useContext(StoreContext);


  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder="First Name"></input>
          <input type="text" placeholder="Last Name"></input>

        </div>
        <input type="email" placeholder="Email address"></input>
        <input type="text" placeholder="Street"></input>

        <div className="multi-fields">
          <input type="text" placeholder="City"></input>
          <input type="text" placeholder="state"></input>

        </div>

        <div className="multi-fields">
          <input type="text" placeholder="Zip code"></input>
          <input type="text" placeholder="County"></input>

        </div>
        <input type="text" placeholder="Phone "></input>
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery fee</p>
              <p>${2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCartAmount() + 2}</b>
            </div>
          </div>
          <button className="btn">PROCEED TO PAYMENT</button>

        </div>

      </div>
    </form>

  );
}

export default PlaceOrder;