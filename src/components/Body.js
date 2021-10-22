import React from "react";
import { Link } from "react-router-dom";
import  "./Body.css";
import { connect } from "react-redux";
import { useSelector,useDispatch } from 'react-redux'

const Body = () => {
    const botData=useSelector((state)=>{
        return state.products
      })
    const dispatch=useDispatch()
    
  
    const addToCart=()=>{
        dispatch({
            type:"ADD_TO_CART"
        })
    }

    return (
        <>
            <p>Select the best Algo Suited for you</p>
            {
                botData.map((product)=>{
                    return (
                        <div className="product">
                
        
                 <div className="product__details">
                 <p className="details__desc">{product.bot}</p>
                 <div className="details__title">
                     <div>
                     <p>Carg</p>
                     </div>
                     <div>
                     {product.cagr}
        
                     </div>
                 </div>
                 <div className="details__price">
                 <div>
                     <p>Index_value</p>
                     </div>
                     <div>
                     ${product["index-value"]}</div>
        
        
                     </div>
                 </div>
        
                 <div className="product__buttons">
                 <Link className={`${"buttons__btn"} ${"buttons__add"}`} to={`/bots-details/${product.id}`}>View algo</Link>

                <button
                    onClick={addToCart}
                    className={`${"buttons__btn"} ${"buttons__add"}`}
                >
                    Add To Cart
                </button>
                </div>
            </div>
                       
                    )
                })
            }
        </>
    )
}

export default Body


// // import {
//     //   loadCurrentItem,
//     //   addToCart,
//     // } from "../../../redux/Shopping/shopping-actions";
//     // { product, addToCart, loadCurrentItem }
//     // const Product = () => {
// const Body =()=>{
    
//     const data=useSelector((state)=>{
//         return state.bots 
//         })
//     const dispatch=useDispatch()
    
    
//     return (
//             data.maps((currentitem)=>{
                    
                
        
//                 <div className={styles.product}>
                
        
//                 <div className={styles.product__details}>
//                 <p className={styles.details__desc}>{product.bot}</p>
//                 <div className={styles.details__title}>
//                     <div>
//                     <p>Carg</p>
//                     </div>
//                     <div>
//                     {product.cagr}
        
//                     </div>
//                 </div>
//                 <div className={styles.details__price}>
//                 <div>
//                     <p>Index_value</p>
//                     </div>
//                     <div>
//                     ${product["index-value"]}</div>
        
        
//                     </div>
//                 </div>
        
//                 <div className={styles.product__buttons}>
//                 <Link to={`/product/${product.id}`}>
//                     <button
//                     onClick={() => loadCurrentItem(product)}
//                     className={`${styles.buttons__btn} ${styles.buttons__view}`}
//                     >
//                     View Item
//                     </button>
//                 </Link>
//                 <button
//                     onClick={() => addToCart(product.id)}
//                     className={`${styles.buttons__btn} ${styles.buttons__add}`}
//                 >
//                     Add To Cart
//                 </button>
//                 </div>
//             </div>
          
//         );
//             }
//     }
// }
// export default Body;

// // const mapDispatchToProps = (dispatch) => {
// //   return {
// //     addToCart: (id) => dispatch(addToCart(id)),
// //     loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
// //   };