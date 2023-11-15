import React, {createContext, useState} from 'react'
import data_product from "../assets/data/data_product"

export const PlanContext = createContext(null);

const getDefaultCart = ()=>{
    let cart = {};
    for (let index = 0; index < product_data.length; index++) {
        cart[index] = 0;
    }
    return cart;
}

const PlanContext = (props) => {

    const [cartItem, setCartItems] = useState(getDefaultCart());
    const contextValue = {product_data, cartItem, };

    console.log(cartItem);
   

  return (
    <div>PlanContext</div>
  )
}

