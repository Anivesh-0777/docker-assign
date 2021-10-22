
import React from "react";
import  "./ViewItems.css"
import { useParams } from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'



const ViewItems = () => {

    const {id}=useParams();
    const dispatch=useDispatch()

    const Full_data=useSelector((state)=>state.products)

    const addToCart=()=>{
        dispatch({
            type:"ADD_TO_CART"
        })}
   

  return (
      <>
      {

    

      Full_data.filter((tempid)=>{return tempid.id===parseInt(id)}).map((current=>{
          return(
            <div className="singleItem">
      
            <div className="singleItem__details">
              <div>
                <h4 >{current.bot}</h4>
                <div >{current.description}</div>
                
              </div> 
      
             
              <div className="index_val">
                  <p>index value</p>
                <div>
                $ {current["index-value"]}
                  
      
                </div>
                </div>
                  
                <div className="cagr_val">
                
                    <p>Carg</p>
                  <div>
                  $ {current["cagr"]}
      
                  </div>
                  </div>
                <div>
                </div>
      
            </div>
            <div className="but_class"> 
      
              <button
                onClick={addToCart}
                className="details__addBtn"
                >
                Cart
              </button>
            <button className="details__addBtn">ModerateRisk</button>
            </div>
          </div>
              


    
          )
    }))
}

    </>
    );
};

export default ViewItems;