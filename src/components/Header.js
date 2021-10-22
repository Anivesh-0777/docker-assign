import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { useSelector,useDispatch } from 'react-redux'


import { connect } from "react-redux";

const Header = () => {

    const cart_value=useSelector((state)=>{
        return state.cart;
    })
    console.log("car curr",cart_value)


  return (
    <div className="Header">
      <div className="main_div">

      <div>Dashboard </div>
      <div className="cart__counter">
        
        <div>

          Cart {cart_value}
          

        </div>
        </div>
    </div>
     

      
     
    </div>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     cart: state.shop.cart,
//   };
// };

export default Header;