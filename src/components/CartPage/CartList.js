import React,{useContext} from 'react'
import CartItem from "./CartItem";
import { ServiceContext } from "../../context/context";

const CartList = () => {
  const { cart, increment, decrement, removeItem } = useContext(ServiceContext);
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col'>
          {cart.length === 0 ? (
            <h1 className='text-title text-center mb-4 text-secondary'>عربة التسوق فارغة  </h1>
          ) : (
            <>
              {cart.map((item) => (
                <CartItem
                  key={item.id}
                  cartItem={item}
                  increment={increment}
                  decrement={decrement}
                  remove={removeItem}
                />
                
                ))}
                
            </>
          )}
        </div>
      
      </div>
   
    </div>
  )
}

export default CartList
