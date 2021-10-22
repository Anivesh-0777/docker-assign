
import { createStore } from "redux";
const INITIAL_STATE = {
    products: [
      {
        "id":1,
        "bot":"Hot Bot",
        "description":"Hot bot is low volatility portfolio of growth stocks selected based on our proprietary metrics",
        "index-value":289.34,
        "cagr":34
     },
     {
        "id":2,
        "bot":"Cool Bot",
        "description":"Cool bot is low volatility portfolio of growth stocks selected based on our proprietary metrics",
        "index-value":439.34,
        "cagr":28
     },
     {
        "id":3,
        "bot":"Options Bot",
        "description":"Options bot is low volatility portfolio of growth stocks selected based on our proprietary metrics",
        "index-value":139.34,
        "cagr":42
     }
  
    ],
    cart: 0,
    currentItem: null,
  };





const ADD_TO_CART = "ADD_TO_CART";
const LOAD_CURRENT_ITEM = "LOAD_CURRENT_ITEM";






const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case "ADD_TO_CART":
          return{
            ...state,
            cart:state.cart+1
         }
        }
    return state
    }





const redux=createStore(shopReducer);
export default redux